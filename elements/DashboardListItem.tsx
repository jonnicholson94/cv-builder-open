
type Props = {
    title: string,
    employer: string,
    start: string,
    end: string
}

const DashboardListItem = ({ title, employer, start, end }: Props) => {
    return (
        <div className="dashboard-list width-100 flex-center">
            <p className="dashboard-list-item list-main width-30">{title}</p>
            <p className="dashboard-list-item width-30">{employer}</p>
            <p className="dashboard-list-item width-20">{start}</p>
            <p className="dashboard-list-item width-20">{end}</p>
        </div>
    )
}

export default DashboardListItem