

import { useState, useEffect } from "react"

import { useQuery } from "react-query"
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

import useInputUpdate from "../../lib/hooks/useInputUpdate"

import DashboardComponent from "../../components/DashboardComponent"
import DashboardWrapper from "../../components/DashboardWrapper"
import Sidebar from "../../components/Sidebar"
import DashboardHeader from "../../elements/DashboardHeader"
import Hamburger from "../../components/Hamburger"
import DashboardForm from "../../components/DashboardForm"
import DashboardLabel from "../../elements/DashboardLabel"
import DashboardInput from "../../elements/DashboardInput"

import Toolbar from "../../elements/Toolbar"
import useCvFetch from "../../lib/hooks/useCvFetch"
import Pending from "../../components/Pending"

const DashboardSocials = ({ user }) => {

    const fetchCv = useCvFetch()
    const user_id = user.id

    const { isLoading, data } = useQuery(['cvs', user.id], () => fetchCv(user_id))
    const { updateTwitter, updateLinkedIn, updateGithub } = useInputUpdate()

    const [hamburger, setHamburger] = useState<boolean>(null)
    const [twitter, setTwitter] = useState<string>("")
    const [linkedIn, setLinkedIn] = useState<string>("")
    const [github, setGithub] = useState<string>("")

    useEffect(() => {
      if (data) {
        setTwitter(data[0].twitter)
        setLinkedIn(data[0].linkedIn)
        setGithub(data[0].github)
      }
    }, [data])

    // if (isLoading) {
    //   return <Pending />
    // }

    return (
        <DashboardWrapper>
            <Sidebar setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} />
                <DashboardForm>
                    <DashboardLabel htmlFor="twitter" content="Twitter" />
                    <DashboardInput placeholder="Enter your Twitter address" type="text" state={twitter} setState={setTwitter} submit={updateTwitter} />
                    <DashboardLabel htmlFor="linkedIn" content="LinkedIn" />
                    <DashboardInput placeholder="Enter your LinkedIn profile" type="text" state={linkedIn} setState={setLinkedIn} submit={updateLinkedIn} />
                    <DashboardLabel htmlFor="github" content="Github" />
                    <DashboardInput placeholder="Enter your GitHub profile" type="text" state={github} setState={setGithub} submit={updateGithub} />
                </DashboardForm>
            </DashboardComponent>
            <Hamburger show={hamburger} setShow={setHamburger} />
            <Toolbar />
        </DashboardWrapper>
    )
}

export default DashboardSocials

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