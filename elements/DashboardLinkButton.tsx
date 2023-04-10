
import Link from "next/link"

type Props = {
    href: string,
    content: string
}

const DashboardLinkButton = ({ href, content }: Props) => {
    return (
        <Link className="dashboard-link-button flex-center margin-vertical-30" href={href}>{content}</Link> 
    )
}

export default DashboardLinkButton