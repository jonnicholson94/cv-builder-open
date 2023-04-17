import Link from "next/link"

import { useSession } from "@supabase/auth-helpers-react"

const HomepageHero = () => {

    const session = useSession()

    return (
        <div className="auto-height width-100 margin-vertical-50 flex-center flex-column">
            <h1 className="homepage-hero-sub-heading width-90 margin-top-30">Build a CV,</h1>
            <h2 className="homepage-hero-highlighted-heading width-90 margin-top-10">really fast</h2>
            <p className="homepage-hero-paragraph width-90 margin-vertical-30">Add your details, pick a design and export your CV - all from one app</p>
            <Link className="homepage-hero-cta flex-center margin-vertical-30" href={session ? "/dashboard/details" : "/sign-in"}>{ session ? "Go to dashboard" : "Get started"}</Link>
            <img className="homepage-hero-image margin-vertical-50" src="/homepage/dashboard.png" />
        </div>
    )
}

export default HomepageHero