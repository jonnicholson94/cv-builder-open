
import Link from "next/link"

const AuthLogo = () => {
    return (
        <Link className="margin-vertical-30" href="/">
            <img className="auth-logo" src="/logos/square-logo-white.png" />
        </Link>
    )
}

export default AuthLogo