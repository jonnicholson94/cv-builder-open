
import { useState } from "react"

import DashboardLabel from "./DashboardLabel"
import InputError from "./InputError"

import { validateLength } from "../lib/inputValidation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const AddList = ({ name, content, placeholder, state, setState }) => {

    const [input, setInput] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [dragId, setDragId] = useState<number>()

    const handleChange = (e) => {
        setInput(e.target.value)
        setError(() => validateLength(e.target.value))
    }

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.code === "Enter") {
            (e.target as HTMLElement).blur()
        }
        
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        addToList()
        
    }

    const addToList = () => {
        const newState = [...state, input]
        setState(newState)
        setInput("")
    }
    const removeFromList = (item) => {
        const newState = state.filter(x => x !== item)
        setState(newState)
    }

    const updateItem = (e, index, item) => {

        // Take a copy of the array
        const arrayCopy = [...state]

        // Update the value of the target inside of the array copy
        arrayCopy[index] = e.target.innerHTML

        // Update the original array to be the new array
        setState(arrayCopy)
    }

    const handleDragOver = (ev) => { ev.preventDefault() }

    const handleDrag = (ev) => {
        
        setDragId(ev.currentTarget.id)
    }

    const handleDrop = (ev) => {

        const foundItem = state[dragId]

        const filteredArray = state.filter(item => item !== foundItem)

        const newArray = [...filteredArray.slice(0, ev.currentTarget.id), foundItem, ...filteredArray.slice(ev.currentTarget.id)]

        // Update the original array to be the new array
        setState(newArray)

    }

    return (
        <>
            <DashboardLabel htmlFor={name} content={content} />
            <div className="auto-height width-100">
                { state.map((item, index) => {
                return ( 
                    <div className="list-item width-100 flex-center" key={item} draggable onDragOver={handleDragOver} onDragStart={handleDrag} onDrop={(e) => handleDrop(e)} id={index}>
                        <p className="list-item-input height-100 width-90 flex-start" contentEditable={true} onBlur={(e) => updateItem(e, index, item)} onKeyDown={handleEnterPress}>{item}</p>
                        <FontAwesomeIcon className="list-item-icon" icon={faTrash} onClick={() => removeFromList(item)} />
                    </div>
                    )
                })}
            </div>
            <input className="dashboard-input" placeholder={placeholder} type="text" value={input} onChange={handleChange} onKeyDown={handleEnterPress} onBlur={handleBlur} />
            { error && <InputError error={error} /> }
            <div className="auto-height width-100 flex-end">
                <button className="dashboard-button" onClick={() => addToList()}>Add</button>
            </div>
        </>
    )
}

export default AddList