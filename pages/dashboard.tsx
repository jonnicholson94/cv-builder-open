
import { useState } from "react"
import { useAppSelector } from "../lib/reduxHelpers"

import DashboardComponent from "../components/DashboardComponent"
import DashboardWrapper from "../components/DashboardWrapper"
import Sidebar from "../components/Sidebar"
import DashboardHeader from "../elements/DashboardHeader"
import Hamburger from "../components/Hamburger"
import DashboardForm from "../components/DashboardForm"
import DashboardDetails from "../components/DashboardDetails"
import DashboardContact from "../components/DashboardContact"
import DashboardJobs from "../components/DashboardJobs"
import DashboardEducation from "../components/DashboardEducation"
import DashboardSideProjects from "../components/DashboardSideProjects"
import DashboardAbout from "../components/DashboardAbout"

import Toolbar from "../elements/Toolbar"

const Dashboard = () => {

    const { active } = useAppSelector((state) => state.active)

    const [hamburger, setHamburger] = useState<boolean>(null)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [twitter, setTwitter] = useState<string>("")
    const [linkedIn, setLinkedIn] = useState<string>("")
    const [github, setGithub] = useState<string>("")

    return (
        <DashboardWrapper>
            <Sidebar setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} />
                <DashboardForm>
                    { active === "Your details" && <DashboardDetails name={name} setName={setName} /> }
                    { active === "Contact details" && <DashboardContact phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} twitter={twitter} setTwitter={setTwitter} linkedIn={linkedIn} setLinkedIn={setLinkedIn} github={github} setGithub={setGithub} /> }
                    { active === "Job history" && <DashboardJobs />}
                    { active === "Education" && <DashboardEducation />}
                    { active === "Side projects" && <DashboardSideProjects /> }
                    { active === "About" && <DashboardAbout /> }
                </DashboardForm>
            </DashboardComponent>
            <Hamburger show={hamburger} setShow={setHamburger} />
            <Toolbar />
        </DashboardWrapper>
    )
}

export default Dashboard