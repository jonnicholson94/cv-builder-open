
import { useState } from "react"

import DashboardComponent from "../components/DashboardComponent"
import DashboardWrapper from "../components/DashboardWrapper"
import Sidebar from "../components/Sidebar"
import DashboardHeader from "../elements/DashboardHeader"
import Hamburger from "../components/Hamburger"
import DashboardForm from "../components/DashboardForm"
import DashboardDetails from "../components/DashboardDetails"
import DashboardContact from "../components/DashboardContact"

import { Active } from "../types/sidebar"
import DashboardJobs from "../components/DashboardJobs"

const Dashboard = () => {

    const [active, setActive] = useState<Active>("Your details")
    const [hamburger, setHamburger] = useState<boolean>(null)

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [twitter, setTwitter] = useState<string>("")
    const [linkedIn, setLinkedIn] = useState<string>("")
    const [github, setGithub] = useState<string>("")

    return (
        <DashboardWrapper>
            <Sidebar state={active} setState={setActive} setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} content={active} />
                <DashboardForm>
                    { active === "Your details" && <DashboardDetails name={name} setName={setName} /> }
                    { active === "Contact details" && <DashboardContact phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} twitter={twitter} setTwitter={setTwitter} linkedIn={linkedIn} setLinkedIn={setLinkedIn} github={github} setGithub={setGithub} /> }
                    { active === "Job history" && <DashboardJobs />}
                </DashboardForm>
            </DashboardComponent>
            <Hamburger state={active} setState={setActive} show={hamburger} setShow={setHamburger} />
        </DashboardWrapper>
    )
}

export default Dashboard