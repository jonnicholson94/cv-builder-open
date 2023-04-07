
import Link from "next/link"

type Props = {
    href: string,
    content: string
}

const AuthLink = ({ href, content }: Props) => {
    return (
        <Link className="auth-link" href={href}>{content}</Link>
    )
}

export default AuthLink