
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
import DashboardTextarea from "../../elements/DashboardTextarea"

import Toolbar from "../../elements/Toolbar"
import useCvFetch from "../../lib/hooks/useCvFetch"
import Pending from "../../components/Pending"

const DashboardAbout = ({ user }) => {

    const fetchCv = useCvFetch()
    const user_id = user.id

    const [about, setAbout] = useState<string>("")

    const { updateAbout } = useInputUpdate()

    const { isLoading, data } = useQuery(['cvs', user.id], () => fetchCv(user_id))

    const [hamburger, setHamburger] = useState<boolean>(null)

    useEffect(() => {
      if (data) {
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
                    <DashboardTextarea placeholder="Enter some details about yourself" state={about} setState={setAbout} submit={updateAbout} />
                </DashboardForm>
            </DashboardComponent>
            <Hamburger show={hamburger} setShow={setHamburger} />
            <Toolbar />
        </DashboardWrapper>
    )
}

export default DashboardAbout

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