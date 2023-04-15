
import { useState } from "react"

import useJobCreate from "../lib/hooks/useJobCreate"
import { useMutation } from "react-query"
import { useRouter } from "next/router"
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"

import AddForm from "../components/AddForm"
import AddWrapper from "../components/AddWrapper"
import AddHeader from "../elements/AddHeader"
import AddHeading from "../elements/AddHeading"
import AddInput from "../elements/AddInput"
import AddList from "../elements/AddList"
import Divider from "../elements/Divider"
import AddDateInput from "../elements/AddDateInput"
import AddSaveButton from "../elements/AddSaveButton"


const AddJob = () => {

    const supabase = useSupabaseClient()
    const user = useUser()
    const router = useRouter()

    const [pending, setPending] = useState<boolean>(false)

    const [jobTitle, setJobTitle] = useState<string>("")
    const [employer, setEmployer] = useState<string>("")
    const [responsibilities, setResponsibilities] = useState<string[]>([])
    const [achievements, setAchievements] = useState<string[]>([])
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const createJob = async (user_id, job_title, employer, responsibilities, achievements, start_date, end_date) => {

        const { data, error } = await supabase.from("jobs").insert({
            user_id,
            job_title,
            employer,
            responsibilities, 
            achievements,
            start_date,
            end_date
        })

        return { data, error }
    }

    const mutation = useMutation(['jobs'], () => createJob(user.id, jobTitle, employer, responsibilities, achievements, startDate, endDate))

    const handleSubmit = async (e) => {
        e.preventDefault()

        setPending(true)

        try {
            
            await mutation.mutate()

            console.log(mutation);
            

            if (mutation.isSuccess) {
                router.push("/dashboard")
            }

            if (mutation.isError) {
                console.log("There's been an error");
                
            }

            
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <AddWrapper>
            <AddHeader />
            <AddForm onSubmit={handleSubmit}>
                <AddHeading content="Add a job" />
                <Divider />
                <AddInput name="job_title" content="Job title" placeholder="Enter your job title" state={jobTitle} setState={setJobTitle} />
                <AddInput name="employer" content="Employer" placeholder="Enter your employer" state={employer} setState={setEmployer} />
                <AddList name="responsibilities" content="Responsibilities" placeholder="Enter a responsibility" state={responsibilities} setState={setResponsibilities} />
                <AddList name="achievements" content="Key achievements" placeholder="Enter an achievement" state={achievements} setState={setAchievements} />
                <AddDateInput name="start_date" content="Start date" state={startDate} setState={setStartDate} /> 
                <AddDateInput name="end_date" content="End date" state={endDate} setState={setEndDate} /> 
                <AddSaveButton pending={pending} />
            </AddForm>
        </AddWrapper>
    )
}

export default AddJob