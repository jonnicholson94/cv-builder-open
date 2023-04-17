
import { useState } from "react"

import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"

import DashboardComponent from "../../components/DashboardComponent"
import DashboardWrapper from "../../components/DashboardWrapper"
import Sidebar from "../../components/Sidebar"
import DashboardHeader from "../../elements/DashboardHeader"
import Hamburger from "../../components/Hamburger"
import DashboardForm from "../../components/DashboardForm"
import DashboardLinkButton from "../../elements/DashboardLinkButton"
import DashboardProject from "../../elements/DashboardProject"
import Toolbar from "../../elements/Toolbar"

const DashboardSideProjects = ({ user }) => {

    const [hamburger, setHamburger] = useState<boolean>(null) 

    return (
        <DashboardWrapper>
            <Sidebar setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} />
                <DashboardForm>
                    <DashboardProject title="Bla" description="Bla bla" />
                    <DashboardProject title="Bla" description="Bla bla" />
                    <DashboardLinkButton href="/add-project" content="Add a side project" />
                </DashboardForm>
            </DashboardComponent>
            <Hamburger show={hamburger} setShow={setHamburger} />
            <Toolbar />
        </DashboardWrapper>
            
    )
}

export default DashboardSideProjects

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