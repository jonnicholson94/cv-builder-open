
type Props = {
    title: string,
    employer: string,
    start: string,
    end: string
}

const DashboardListHeading = ({ title, employer, start, end }: Props) => {
    return (
        <div className="dashboard-heading-list width-100 flex-center">
            <p className="dashboard-job-heading width-30">{title}</p>
            <p className="dashboard-job-heading width-30">{employer}</p>
            <p className="dashboard-job-heading width-20">{start}</p>
            <p className="dashboard-job-heading width-20">{end}</p>
        </div>
    )
}

export default DashboardListHeading