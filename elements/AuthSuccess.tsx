
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    successMessage: string
}

const AuthSuccess = ({ successMessage }: Props) => {
    return (
        <div className="auto-height width-80 flex-start">
            <FontAwesomeIcon className="auth-success-icon margin-right-10" icon={faCheckCircle} />
            <p className="auth-success auto-height width-80 margin-vertical-20">{successMessage}</p>
        </div>
        
    )
}

export default AuthSuccess