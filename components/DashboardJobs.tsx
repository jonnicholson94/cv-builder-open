
import { useState, useEffect } from "react"

import DashboardLinkButton from "../elements/DashboardLinkButton"
import DashboardListHeading from "../elements/DashboardListHeading"
import DashboardListItem from "../elements/DashboardListItem"

const DashboardJobs = () => {

    let jobsArray = [
        {
            title: "Product Manager",
            employer: "LOVESPACE",
            start: "Apr 22",
            end: "-"
        },
        {
            title: "Junior Product Manager",
            employer: "LOVESPACE",
            start: "Jun 21",
            end: "Apr 22"
        },
        {
            title: "Program Manager",
            employer: "Jaywing",
            start: "Jul 21",
            end: "Apr 22"
        },
    ]

    const [dragId, setDragId] = useState()
    const [array, setArray] = useState(jobsArray)

    const handleDragOver = (ev) => { ev.preventDefault() }

    const handleDrag = (ev) => {
        console.log(ev.currentTarget.id);
        
        setDragId(ev.currentTarget.id)
    }

    const handleDrop = (ev) => {

        // Find the items that I want to arrange
        const foundItem = array.find(job => job.title === dragId)
        const dragItem = array.find(job => job.title === ev.currentTarget.id)

        // Create a copy of the array, with the element removed
        const filteredArray = array.filter(job => foundItem.title !== job.title) 

        // Find the element position of the item that I want to push up
        const elementPosition = array.indexOf(dragItem)

        // Insert the item into the correct element
        const newArray = [...filteredArray.slice(0, elementPosition), foundItem, ...filteredArray.slice(elementPosition)]
        console.log(newArray);
        

        // Update the original array to be the new array
        setArray(newArray)

    }

    return (
        <>
            <DashboardListHeading title="Job title" employer="Employer" start="Start date" end="End date" />
            { array.map(job => {
                return (
                    <DashboardListItem title={job.title} employer={job.employer} start={job.start} end={job.end}
                        onDragOver={handleDragOver} onDragStart={handleDrag} onDrop={handleDrop}
                    /> 
                )
            })}
            
            <DashboardLinkButton href="/add-job" content="Add a job" />
        </>
    )
}

export default DashboardJobs