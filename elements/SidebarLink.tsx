import { useAppDispatch, useAppSelector } from "../lib/reduxHelpers"
import { changeActive } from "../features/activeSlice"
import { Active } from "../types/sidebar"
import HelpCard from "./HelpCard"

type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    content: Active,
    help: string
}

const SidebarLink = ({ setShow, content, help }: Props) => {

    const { active } = useAppSelector((state) => state.active)
    const dispatch = useAppDispatch()

    const handleClick = () => {

        if (active === content) {
            return
        }

        setShow(false)
        dispatch(changeActive(content))

    }

    return (
        <HelpCard content={help} side="right">
            <p className={`sidebar-link ${ active === content ? "sidebar-active" : ""}`} onClick={() => handleClick()}>
                {content}
            </p>
        </HelpCard>
    )
}

export default SidebarLink