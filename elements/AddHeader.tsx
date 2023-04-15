
import Link from "next/link"

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddHeader = () => {
    return (
        <header className="add-header width-100 flex-start">
            <Link className="add-header-link auto-height flex-center margin-vertical-30" href="/dashboard">
                <FontAwesomeIcon className="add-header-icon margin-left-20 margin-right-10" icon={faArrowLeftLong} />
                <p>Back to dashboard</p>
            </Link>
        </header>
    )
}

export default AddHeader