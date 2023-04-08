import { Active } from "../types/sidebar"

type Props = {
    state: Active,
    setState: React.Dispatch<React.SetStateAction<Active>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    content: Active
}

const SidebarLink = ({ state, setState, setShow, content }: Props) => {

    const handleClick = () => {

        if (state === content) {
            return
        }

        setShow(false)
        setState(content)

    }

    return (
        <p className={`sidebar-link ${ state === content ? "sidebar-active" : ""}`} onClick={() => handleClick()}>
            {content}
        </p>
    )
}

export default SidebarLink