
import TopBar from "../elements/TopBar"
import ViewCv from "../elements/ViewCv"
import SidebarLinkWrapper from "./SidebarLinkWrapper"

type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ setShow }: Props) => {

    return (
        <div className="sidebar full-vh flex-start flex-column">
            <TopBar />
            <ViewCv />
            <SidebarLinkWrapper setShow={setShow} />
        </div>
    )
}

export default Sidebar