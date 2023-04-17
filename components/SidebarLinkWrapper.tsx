
import SidebarLink from "../elements/SidebarLink"

type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarLinkWrapper = ({ setShow }: Props) => {
    return (
        <div className="width-85 column-start flex-column">
            <SidebarLink content="Details" setShow={setShow} help="CTRL + D" />
            <SidebarLink content="Socials" setShow={setShow} help="CTRL + C" />
            <SidebarLink content="Jobs" setShow={setShow} help="CTRL + J" />
            <SidebarLink content="Education" setShow={setShow} help="CTRL + E" />
            <SidebarLink content="Projects" setShow={setShow} help="CTRL + P" />
            <SidebarLink content="About" setShow={setShow} help="CTRL + A" />
            <SidebarLink content="Skills" setShow={setShow} help="CTRL + S" />
        </div>
    )
}

export default SidebarLinkWrapper