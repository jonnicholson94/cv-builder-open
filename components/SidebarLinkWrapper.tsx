
import SidebarLink from "../elements/SidebarLink"

import { Active } from "../types/sidebar"

type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarLinkWrapper = ({ setShow }: Props) => {
    return (
        <div className="width-85 column-start flex-column">
            <SidebarLink content="Your details" setShow={setShow} help="CTRL + D" />
            <SidebarLink content="Socials" setShow={setShow} help="CTRL + C" />
            <SidebarLink content="Job history" setShow={setShow} help="CTRL + J" />
            <SidebarLink content="Education" setShow={setShow} help="CTRL + E" />
            <SidebarLink content="Side projects" setShow={setShow} help="CTRL + P" />
            <SidebarLink content="About" setShow={setShow} help="CTRL + A" />
            <SidebarLink content="Skills" setShow={setShow} help="CTRL + S" />
        </div>
    )
}

export default SidebarLinkWrapper