
import DashboardLinkButton from "../elements/DashboardLinkButton"
import DashboardProject from "../elements/DashboardProject"

const DashboardSideProjects = () => {
    return (
        <>
            <DashboardProject title="Bla" description="Bla bla" />
            <DashboardProject title="Bla" description="Bla bla" />
            <DashboardLinkButton href="/add-project" content="Add a side project" />
        </>
    )
}

export default DashboardSideProjects