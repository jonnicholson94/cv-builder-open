import DashboardLinkButton from "../elements/DashboardLinkButton"
import DashboardListHeading from "../elements/DashboardListHeading"
import DashboardListItem from "../elements/DashboardListItem"

const DashboardEducation = () => {
    return (
        <>
            <DashboardListHeading title="Course" employer="Provider" start="Start date" end="End date" />
            <DashboardListItem title="BSc Psychology" employer="University of Manchester" start="Sep 14" end="Jul 17" />
            <DashboardLinkButton href="/add-education" content="Add education" />
        </>
    )
}

export default DashboardEducation