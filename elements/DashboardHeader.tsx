
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

type Props = {
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    content: string
}

const DashboardHeader = ({ setState, content }: Props) => {
    return (
        <div className="dashboard-header height-50 width-100 flex-start">
            <FontAwesomeIcon className="hamburger-icon margin-left-20" icon={faBars} onClick={() => setState(true)} />
            <h4 className="margin-left-20">{content}</h4>
        </div>
    )
}

export default DashboardHeader