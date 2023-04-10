
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    title: string,
    description: string
}

const DashboardProject = ({ title, description }: Props) => {
    return (
        <div className="side-project-box auto-height width-100 flex-center margin-vertical-10">
            <div className="auto-height flex-center width-10">
                <span className="avatar-alt"></span>
            </div>
            <div className="auto-height width-80 flex-column column-start margin-vertical-15">
                <p className="side-project-title">{title}</p>
                <p className="side-project-description">{description}</p>
            </div>
            <div className="auto-height width-10 flex-center">
                <FontAwesomeIcon className="side-project-icon" icon={faChevronRight} />
            </div>
        </div>
    )
}

export default DashboardProject