
import { useState, useEffect } from "react"
import { useMutation } from "react-query"
import { useRouter } from "next/router"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useQuery } from "react-query"

import useJobsFetch from "../lib/hooks/useJobsFetch"

import AddForm from "../components/AddForm"
import AddWrapper from "../components/AddWrapper"
import AddHeader from "../elements/AddHeader"
import AddHeading from "../elements/AddHeading"
import AddInput from "../elements/AddInput"
import AddList from "../elements/AddList"
import Divider from "../elements/Divider"
import AddDateInput from "../elements/AddDateInput"
import AddSaveButton from "../elements/AddSaveButton"


const ViewJob = ({ user }) => {

    const supabase = useSupabaseClient()
    const router = useRouter()
    const user_id = user.id
    const fetchJob = useJobsFetch()

    const query = router.query.id

    const { data } = useQuery(['jobs', user.id], () => fetchJob(user_id))

    const [pending, setPending] = useState<boolean>(false)

    const [jobTitle, setJobTitle] = useState<string>("")
    const [employer, setEmployer] = useState<string>("")
    const [responsibilities, setResponsibilities] = useState<string[]>([])
    const [achievements, setAchievements] = useState<string[]>([])
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const updateJob = async (user_id, job_title, employer, responsibilities, achievements, start_date, end_date) => {

        const { data, error } = await supabase.from("jobs").update({
            user_id,
            job_title,
            employer,
            responsibilities, 
            achievements,
            start_date,
            end_date
        }).eq("job_id", query)

        return { data, error }
    }

    const mutation = useMutation(['jobs'], () => updateJob(user.id, jobTitle, employer, responsibilities, achievements, startDate, endDate), {
        onSuccess: () => {
            router.push("/dashboard/jobs")
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        setPending(true)

        try {
            
            mutation.mutateAsync()
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        if (data) {
            const singleItem = data.data.filter(item => item.job_id.toString() === query)
            setJobTitle(singleItem[0].job_title)
            setEmployer(singleItem[0].employer)
            setAchievements(singleItem[0].achievements)
            setResponsibilities(singleItem[0].responsibilities)
            setStartDate(singleItem[0].start_date)
            setEndDate(singleItem[0].end_date)
        }
    }, [data])

    return (
        <AddWrapper>
            <AddHeader />
            <AddForm onSubmit={handleSubmit}>
                <AddHeading content="View your job" />
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

export default ViewJob

export const getServerSideProps = async (ctx) => {

    const supabase = createServerSupabaseClient(ctx)
    
    const {
      data: { session },
    } = await supabase.auth.getSession()
  
    if (!session)
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
  
    return {
      props: {
        initialSession: session,
        user: session.user,
      },
    }
  }