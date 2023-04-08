
import { useState } from "react"

import DashboardComponent from "../components/DashboardComponent"
import DashboardWrapper from "../components/DashboardWrapper"
import Sidebar from "../components/Sidebar"
import DashboardHeader from "../elements/DashboardHeader"
import Hamburger from "../components/Hamburger"
import DashboardForm from "../components/DashboardForm"
import DashboardDetails from "../components/DashboardDetails"

import { Active } from "../types/sidebar"

const Dashboard = () => {

    const [active, setActive] = useState<Active>("Your details")
    const [hamburger, setHamburger] = useState<boolean>(null)

    const [name, setName] = useState<string>("")

    return (
        <DashboardWrapper>
            <Sidebar state={active} setState={setActive} setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} content={active} />
                <DashboardForm>
                    { active === "Your details" && <DashboardDetails name={name} setName={setName} /> }
                </DashboardForm>
            </DashboardComponent>
            <Hamburger state={active} setState={setActive} show={hamburger} setShow={setHamburger} />
        </DashboardWrapper>
    )
}

export default Dashboard