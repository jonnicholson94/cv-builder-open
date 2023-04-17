

import { useState, useEffect } from "react"
import { useAppSelector } from "../../lib/reduxHelpers"
import { useRouter } from "next/router"

import { useQuery } from "react-query"
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

import DashboardComponent from "../../components/DashboardComponent"
import DashboardWrapper from "../../components/DashboardWrapper"
import Sidebar from "../../components/Sidebar"
import DashboardHeader from "../../elements/DashboardHeader"
import Hamburger from "../../components/Hamburger"
import DashboardForm from "../../components/DashboardForm"
import DashboardListHeading from "../../elements/DashboardListHeading"
import DashboardLinkButton from "../../elements/DashboardLinkButton"

import Toolbar from "../../elements/Toolbar"

const DashboardEducation = ({ user }) => {

    const [hamburger, setHamburger] = useState<boolean>(null)

    return (
        <DashboardWrapper>
            <Sidebar setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} />
                <DashboardForm>
                    <DashboardListHeading title="Course" employer="Provider" start="Start date" end="End date" />
                    {/* <DashboardListItem title="BSc Psychology" employer="University of Manchester" start="Sep 14" end="Jul 17" /> */}
                    <DashboardLinkButton href="/add-education" content="Add education" />
                </DashboardForm>
            </DashboardComponent>
            <Hamburger show={hamburger} setShow={setHamburger} />
            <Toolbar />
        </DashboardWrapper>
    )
}

export default DashboardEducation

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