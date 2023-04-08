
import { useState } from "react"

import DashboardComponent from "../components/DashboardComponent"
import DashboardWrapper from "../components/DashboardWrapper"
import Sidebar from "../components/Sidebar"
import DashboardHeader from "../elements/DashboardHeader"
import Hamburger from "../components/Hamburger"

import { Active } from "../types/sidebar"

const Dashboard = () => {

    const [active, setActive] = useState<Active>("Your details")
    const [hamburger, setHamburger] = useState<boolean>(null)

    return (
        <DashboardWrapper>
            <Sidebar state={active} setState={setActive} setShow={setHamburger} />
            <DashboardComponent>
                <DashboardHeader setState={setHamburger} content={active} />
            </DashboardComponent>
            <Hamburger state={active} setState={setActive} show={hamburger} setShow={setHamburger} />
        </DashboardWrapper>
    )
}

export default Dashboard