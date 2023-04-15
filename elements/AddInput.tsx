
import { useState } from "react"

import { validateLength } from "../lib/inputValidation"

import DashboardLabel from "./DashboardLabel"
import InputError from "./InputError"

const AddInput = ({ name, content, placeholder, state, setState }) => {

    const [error, setError] = useState("")

    const handleChange = (e) => {
        setState(e.target.value)

        setError(() => validateLength(e.target.value))
    } 

    return (
        <>
            <DashboardLabel htmlFor={name} content={content} />
            <input className={error ? "dashboard-input dashboard-input-error" : "dashboard-input"} placeholder={placeholder} value={state} onChange={handleChange} />
            { error && <InputError error={error} /> }
        </>
    )
}

export default AddInput