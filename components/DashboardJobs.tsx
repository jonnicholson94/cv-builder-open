import DashboardLinkButton from "../elements/DashboardLinkButton"
import DashboardListHeading from "../elements/DashboardListHeading"
import DashboardListItem from "../elements/DashboardListItem"

const DashboardJobs = () => {
    return (
        <>
            <DashboardListHeading title="Job title" employer="Employer" start="Start date" end="End date" />
            <DashboardListItem title="Product Manager" employer="LOVESPACE" start="Apr 22" end="-" /> 
            <DashboardLinkButton href="/add-job" content="Add a job" />
        </>
    )
}

export default DashboardJobs