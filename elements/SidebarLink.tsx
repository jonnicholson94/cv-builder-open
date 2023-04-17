
import Link from "next/link"
import { useRouter } from "next/router"

import { Active } from "../types/sidebar"

import HelpCard from "./HelpCard"

type Props = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    content: Active,
    help: string
}

const SidebarLink = ({ content, help }: Props) => {
    
    const router = useRouter()

    const stringArray = router.asPath.split("/")

    return (
        <HelpCard content={help} side="right">
            <Link className={stringArray[2] === content.toLowerCase() ? `sidebar-link sidebar-active` : "sidebar-link"} href={`/dashboard/${content.toLowerCase()}`}>
                {content}
            </Link>
        </HelpCard>
    )
}

export default SidebarLink