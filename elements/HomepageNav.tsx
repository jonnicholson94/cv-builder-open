
import Link from "next/link"

import { useSession } from "@supabase/auth-helpers-react"

const HomepageNav = () => {

    const session = useSession()

    return (
        <nav className="homepage-nav width-100 flex-center">
            <div className="auto-height width-47 flex-start">
                <Link href="/">
                    <img className="homepage-nav-logo auto-height" src="/logos/word-logo-white.png" />
                </Link>
            </div>
            <div className="auto-height width-47 flex-end">
                { session ? 
                <Link className="homepage-nav-link flex-center" href="/dashboard/details">
                    Dashboard
                </Link> :
                <Link className="homepage-nav-link flex-center" href="/sign-in">
                { session ? "Dashboard" : "Sign in" }
            </Link> }
            </div>
        </nav>
    )
}

export default HomepageNav