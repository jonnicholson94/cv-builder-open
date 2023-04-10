import Link from "next/link"

const HomepageHero = () => {
    return (
        <div className="auto-height width-100 margin-vertical-50 flex-center flex-column">
            <h1 className="homepage-hero-sub-heading width-90 margin-top-30">Build a CV,</h1>
            <h2 className="homepage-hero-highlighted-heading width-90 margin-top-10">really fast</h2>
            <p className="homepage-hero-paragraph width-90 margin-vertical-30">Add your details, pick a design and export your CV - all from one app</p>
            <Link className="homepage-hero-cta flex-center margin-vertical-30" href="/dashboard">Get started</Link>
            <img className="homepage-hero-image margin-vertical-50" src="/homepage/dashboard.png" />
        </div>
    )
}

export default HomepageHero