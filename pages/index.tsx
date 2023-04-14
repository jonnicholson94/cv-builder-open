
import HomepageCallout from "../elements/HomepageCallout"
import HomepageFooter from "../elements/HomepageFooter"
import HomepageHero from "../elements/HomepageHero"
import HomepageInfo from "../elements/HomepageInfo"
import HomepageNav from "../elements/HomepageNav"

const HomePage = () => {
    
    return (
        <div className="auto-height width-100 flex-center flex-column">
            <HomepageNav />
            <HomepageHero />
            <HomepageInfo heading="Add your details" paragraph="Add your job, education, contact details, and more, quickly and easily with intuitive forms." image="/homepage/homepage-1.png" />
            <HomepageInfo heading="Pick a template" paragraph="Once you've added your details, select from different templates and pick one that reflects who you are." image="/homepage/homepage-2.png" />
            <HomepageInfo heading="Export to PDF" paragraph="Login at any time and export your CV to PDF when needed to apply for jobs on the fly, whenever you like." image="/homepage/homepage-3.png" />
            <HomepageInfo heading="Easily make changes" paragraph="Got a new job? Want to add some more responsibilities on? Do it quickly and easily, and export your new version right away." image="/homepage/homepage-4.png" />
            <HomepageCallout />
            <HomepageFooter />
        </div>
    )
    
}

export default HomePage