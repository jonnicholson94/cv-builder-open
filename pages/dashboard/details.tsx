

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


const DashboardDetails = ({ user }) => {

    const fetchCv = useCvFetch()
    const user_id = user.id

    const { isLoading, data } = useQuery(['cvs', user.id], () => fetchCv(user_id))

    const { updateName, updatePhone, updateEmail } = useInputUpdate()

    const [hamburger, setHamburger] = useState<boolean>(null)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    useEffect(() => {
      if (data) {
        setName(data[0].name)
        setPhone(data[0].phone)
        setEmail(data[0].email)
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
                    <DashboardLabel htmlFor="name" content="Your name" />
                    <DashboardInput placeholder="Enter your name" type="text" state={name} setState={setName} submit={updateName} />
                    <DashboardLabel htmlFor="email" content="Email" />
                    <DashboardInput placeholder="Enter your email" type="email" state={email} setState={setEmail} submit={updateEmail} />
                    <DashboardLabel htmlFor="name" content="Phone number" />
                    <DashboardInput placeholder="Enter your phone number" type="text" state={phone} setState={setPhone} submit={updatePhone} />
                </DashboardForm>
            </DashboardComponent>
            <Hamburger show={hamburger} setShow={setHamburger} />
            <Toolbar />
        </DashboardWrapper>
    )
}

export default DashboardDetails

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