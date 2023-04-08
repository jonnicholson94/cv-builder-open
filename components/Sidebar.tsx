
import { useState } from "react"

import TopBar from "../elements/TopBar"
import ViewCv from "../elements/ViewCv"
import SidebarLinkWrapper from "./SidebarLinkWrapper"

import { Active } from "../types/sidebar"

type Props = {
    state: Active,
    setState: React.Dispatch<React.SetStateAction<Active>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ state, setState, setShow }: Props) => {

    return (
        <div className="sidebar full-vh flex-start flex-column">
            <TopBar />
            <ViewCv />
            <SidebarLinkWrapper state={state} setState={setState} setShow={setShow} />
        </div>
    )
}

export default Sidebar