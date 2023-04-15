
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWarning } from "@fortawesome/free-solid-svg-icons"

const InputError = ({ error }) => {
    return (
        <div className="auto-height width-100 flex-start">
            <FontAwesomeIcon className="input-error-icon margin-right-10" icon={faWarning} />
            <p className="input-error">{error}</p>
        </div>
    )
}

export default InputError