
import { useRouter } from "next/router"

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddHeader = () => {

    const router = useRouter()
    return (
        <header className="add-header width-100 flex-start">
            <button className="add-header-link auto-height flex-center margin-vertical-30" onClick={() => router.back()}>
                <FontAwesomeIcon className="add-header-icon margin-left-20 margin-right-10" icon={faArrowLeftLong} />
                <p className="margin-right-20">Back to dashboard</p>
            </button>
        </header>
    )
}

export default AddHeader