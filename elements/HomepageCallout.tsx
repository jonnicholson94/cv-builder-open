import Link from "next/link"

import { useSession } from "@supabase/auth-helpers-react"

const HomepageCallout = () => {

    const session = useSession()

    return (
        <div className="homepage-callout width-80 flex-center flex-column margin-vertical-50">
            <h3 className="homepage-callout-heading margin-top-40 margin-bottom-30">Applying for jobs, made easy</h3>
            <p className="homepage-callout-paragraph margin-vertical-20">Build a better looking CV in minutes. Take the pain out of applying for jobs.</p>
            <Link className="homepage-hero-cta flex-center margin-top-30 margin-bottom-40" href={session ? "/dashboard/details" : "/sign-in"}>{ session ? "Go to dashboard" : "Get started"}</Link>
        </div>
    )
}

export default HomepageCallout