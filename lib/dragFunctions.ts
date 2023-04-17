
import { Job, Education, SideProject } from "../types/data"

export const handleDragOver = (ev: React.DragEvent<HTMLDivElement>) => { ev.preventDefault() }

export const handleDrag = (ev: React.DragEvent<HTMLDivElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
     setState(ev.currentTarget.id)
}

export const handleDrop = <T,> (ev: React.DragEvent<HTMLDivElement>, array: T[], dragId: string, setArray: React.Dispatch<React.SetStateAction<T[]>>) => {

        // Find the items that I want to arrange
        const foundItem = array[dragId]
        
        const dragItem = array[ev.currentTarget.id]
        

        // Create a copy of the array, with the element removed
        const filteredArray = array.filter(item => foundItem !== item)

        // Find the element position of the item that I want to push up
        const elementPosition = array.indexOf(dragItem)

        // Insert the item into the correct element
        const newArray = [...filteredArray.slice(0, elementPosition), foundItem, ...filteredArray.slice(elementPosition)]

        // Update the original array to be the new array
        setArray(newArray)

    }