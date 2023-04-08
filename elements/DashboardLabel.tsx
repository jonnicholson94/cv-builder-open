
type Props = {
    htmlFor: string,
    content: string
}

const DashboardLabel = ({ htmlFor, content }: Props) => {
    return (
        <label className="dashboard-label width-100 margin-top-20" htmlFor={htmlFor}>{content}</label>
    )
}

export default DashboardLabel