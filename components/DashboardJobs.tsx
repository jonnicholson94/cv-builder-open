
import { useState, useEffect } from "react"
import { useUser } from "@supabase/auth-helpers-react"
import { useQuery } from "react-query"

import moment from "moment"

import useJobsFetch from "../lib/hooks/useJobsFetch"

import DashboardLinkButton from "../elements/DashboardLinkButton"
import DashboardListHeading from "../elements/DashboardListHeading"
import DashboardListItem from "../elements/DashboardListItem"
import Pending from "./Pending"

const DashboardJobs = () => {

    const user = useUser()

    const user_id = user.id
    const fetchJobs = useJobsFetch()

    const { isLoading, data: jobs } = useQuery(['jobs', user.id], () => fetchJobs(user_id))

    const [dragId, setDragId] = useState()
    const [array, setArray] = useState([])

    const handleDragOver = (ev) => { ev.preventDefault() }

    const handleDrag = (ev) => {
        
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

        // Update the original array to be the new array
        setArray(newArray)

    }

    useEffect(() => {
        if (jobs) {
            setArray(jobs.data)
        }
    }, [jobs])

    if (isLoading) {
        return <Pending />
    }    

    return (
        <>
            <DashboardListHeading title="Job title" employer="Employer" start="Start date" end="End date" />
            { array.map(job => {
                return (
                    <DashboardListItem title={job.job_title} employer={job.employer} start={moment(job.start_date).format("DD MMM")} end={job.end_date === "" ? "Current" : moment(job.end_date).format("DD MMM")} key={job.job_id}
                        onDragOver={handleDragOver} onDragStart={handleDrag} onDrop={handleDrop}
                    /> 
                )
            })}
            
            <DashboardLinkButton href="/add-job" content="Add a job" />
        </>
    )
}

export default DashboardJobs