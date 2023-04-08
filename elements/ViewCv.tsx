
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const ViewCv = () => {
    return (
        <Link className="view-cv-box flex-center margin-vertical-30" href="/view-cv">
            <div className="width-80 column-start flex-column">
                <h4 className="view-cv-heading">View your CV</h4>
                <p className="view-cv-paragraph">View, edit and export your CV</p>
            </div>
            <div>
                <FontAwesomeIcon className="view-cv-icon" icon={faChevronRight} />
            </div>
        </Link>
    )
}

export default ViewCv