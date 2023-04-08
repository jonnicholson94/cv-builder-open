
import SidebarLink from "../elements/SidebarLink"

import { Active } from "../types/sidebar"

type Props = {
    state: Active,
    setState: React.Dispatch<React.SetStateAction<Active>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarLinkWrapper = ({ state, setState, setShow }: Props) => {
    return (
        <div className="width-85 column-start flex-column">
            <SidebarLink content="Your details" state={state} setState={setState} setShow={setShow} />
            <SidebarLink content="Contact details" state={state} setState={setState} setShow={setShow} />
            <SidebarLink content="Job history" state={state} setState={setState} setShow={setShow} />
            <SidebarLink content="Education" state={state} setState={setState} setShow={setShow} />
            <SidebarLink content="Side projects" state={state} setState={setState} setShow={setShow} />
            <SidebarLink content="About" state={state} setState={setState} setShow={setShow} />
            <SidebarLink content="Skills" state={state} setState={setState} setShow={setShow} />
        </div>
    )
}

export default SidebarLinkWrapper