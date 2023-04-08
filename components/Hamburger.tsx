
import TopBar from "../elements/TopBar"
import ViewCv from "../elements/ViewCv"
import SidebarLinkWrapper from "./SidebarLinkWrapper"

import { Active } from "../types/sidebar"

type Props = {
    state: Active,
    setState: React.Dispatch<React.SetStateAction<Active>>,
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger = ({ state, setState, show, setShow }: Props) => {
    return (
        <>
            <div className="hamburger full-vh flex-start flex-column" data-state={show}>
                <TopBar />
                <ViewCv />
                <SidebarLinkWrapper state={state} setState={setState} setShow={setShow} />
            </div>
            { show ? <div className="hamburger-blocker full-vh full-vw" onClick={() => setShow(false)}></div> : null }
        </>
    )
}

export default Hamburger