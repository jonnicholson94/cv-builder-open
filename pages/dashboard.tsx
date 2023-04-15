
import { useState, useEffect } from "react"
import { useAppSelector } from "../lib/reduxHelpers"

import { useQuery } from "react-query"
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

import DashboardComponent from "../components/DashboardComponent"
import DashboardWrapper from "../components/DashboardWrapper"
import Sidebar from "../components/Sidebar"
import DashboardHeader from "../elements/DashboardHeader"
import Hamburger from "../components/Hamburger"
import DashboardForm from "../components/DashboardForm"
import DashboardDetails from "../components/DashboardDetails"
import DashboardSocials from "../components/DashboardSocials"
import DashboardJobs from "../components/DashboardJobs"
import DashboardEducation from "../components/DashboardEducation"
import DashboardSideProjects from "../components/DashboardSideProjects"
import DashboardAbout from "../components/DashboardAbout"

import Toolbar from "../elements/Toolbar"
import useCvFetch from "../lib/hooks/useCvFetch"
import Pending from "../components/Pending"


const Dashboard = ({ user }) => {

    const fetchCv = useCvFetch()
    const user_id = user.id

    const { isLoading, data } = useQuery(['cvs', user.id], () => fetchCv(user_id))

    const { active } = useAppSelector((state) => state.active)

    const [hamburger, setHamburger] = useState<boolean>(null)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [twitter, setTwitter] = useState<string>("")
    const [linkedIn, setLinkedIn] = useState<string>("")
    const [github, setGithub] = useState<string>("")

    useEffect(() => {
      if (data) {
        setName(data[0].name)
        setPhone(data[0].phone)
        setEmail(data[0].email)
        setTwitter(data[0].twitter)
        setLinkedIn(data[0].linkedIn)
        setGithub(data[0].github)
      }
    }, [data])

    if (isLoading) {
      return <Pending />
    }

    return (
        <DashboardWrapper>
            <Sidebar setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} />
                <DashboardForm>
                    { active === "Your details" && <DashboardDetails name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} /> }
                    { active === "Socials" && <DashboardSocials twitter={twitter} setTwitter={setTwitter} linkedIn={linkedIn} setLinkedIn={setLinkedIn} github={github} setGithub={setGithub} /> }
                    { active === "Job history" && <DashboardJobs />}
                    { active === "Education" && <DashboardEducation />}
                    { active === "Side projects" && <DashboardSideProjects /> }
                    { active === "About" && <DashboardAbout  /> }
                </DashboardForm>
            </DashboardComponent>
            <Hamburger show={hamburger} setShow={setHamburger} />
            <Toolbar />
        </DashboardWrapper>
    )
}

export default Dashboard

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