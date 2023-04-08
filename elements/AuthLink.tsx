
import Link from "next/link"

type Props = {
    href: string,
    content: string
}

const AuthLink = ({ href, content }: Props) => {
    return (
        <Link className="auth-link margin-vertical-20" href={href}>{content}</Link>
    )
}

export default AuthLink