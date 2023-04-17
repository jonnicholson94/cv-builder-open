

import { useState, useEffect } from "react"
import { useUser } from "@supabase/auth-helpers-react"
import { useQuery } from "react-query"

import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"

import { CreatedJob } from "../../types/data"

import moment from "moment"

import useJobsFetch from "../../lib/hooks/useJobsFetch"

import DashboardComponent from "../../components/DashboardComponent"
import DashboardWrapper from "../../components/DashboardWrapper"
import Sidebar from "../../components/Sidebar"
import DashboardHeader from "../../elements/DashboardHeader"
import Hamburger from "../../components/Hamburger"
import DashboardForm from "../../components/DashboardForm"
import DashboardLinkButton from "../../elements/DashboardLinkButton"
import DashboardListHeading from "../../elements/DashboardListHeading"
import DashboardListItem from "../../elements/DashboardListItem"
import Pending from "../../components/Pending"
import Toolbar from "../../elements/Toolbar"

const DashboardJobs = () => {

    const user = useUser()

    const user_id = user.id
    const fetchJobs = useJobsFetch()

    const { isLoading, data } = useQuery(['jobs', user.id], () => fetchJobs(user_id))

    const [dragId, setDragId] = useState()

    const [array, setArray] = useState([])
    const [hamburger, setHamburger] = useState<boolean>(null)

    useEffect(() => {
        if (data) {
            setArray(data.data)
        }
    }, [data])

    // if (isLoading) {
    //     return <Pending />
    // }    

    return (
        <DashboardWrapper>
            <Sidebar setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} content="Jobs" />
                <DashboardForm>
                    <DashboardListHeading title="Job title" employer="Employer" start="Start date" end="End date" />
                    { array.map((job: CreatedJob, index) => {
                        return (
                            <DashboardListItem id={job.job_id} index={index} title={job.job_title} employer={job.employer} start={moment(job.start_date).format("DD MMM")} end={job.end_date === "" ? "Current" : moment(job.end_date).format("DD MMM")} key={job.job_id} dragId={dragId} setDragId={setDragId} state={array} setState={setArray} /> 
                        )
                    })}
            
                    <DashboardLinkButton href="/add-job" content="Add a job" />
                </DashboardForm>
            </DashboardComponent>
            <Hamburger show={hamburger} setShow={setHamburger} />
            <Toolbar />
        </DashboardWrapper>
            
    )
}

export default DashboardJobs

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