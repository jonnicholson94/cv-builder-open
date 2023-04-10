
import TopBar from "../elements/TopBar"
import ViewCv from "../elements/ViewCv"
import SidebarLinkWrapper from "./SidebarLinkWrapper"

import { Active } from "../types/sidebar"

type Props = {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger = ({ show, setShow }: Props) => {
    return (
        <>
            <div className="hamburger full-vh flex-start flex-column" data-state={show}>
                <TopBar />
                <ViewCv />
                <SidebarLinkWrapper setShow={setShow} />
            </div>
            { show ? <div className="hamburger-blocker full-vh full-vw" onClick={() => setShow(false)}></div> : null }
        </>
    )
}

export default Hamburger