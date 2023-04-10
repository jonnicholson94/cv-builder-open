
import Link from "next/link"

const HomepageNav = () => {
    return (
        <nav className="homepage-nav width-100 flex-center">
            <div className="auto-height width-47 flex-start">
                <Link href="/">
                    <img className="homepage-nav-logo auto-height" src="/logos/word-logo-white.png" />
                </Link>
            </div>
            <div className="auto-height width-47 flex-end">
                <Link className="homepage-nav-link flex-center" href="/dashboard">
                    Dashboard
                </Link>
            </div>
        </nav>
    )
}

export default HomepageNav