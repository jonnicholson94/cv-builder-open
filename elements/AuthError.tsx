import { faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    errorMessage: string
}

const AuthError = ({ errorMessage }: Props) => {
    return (
        <div className="auto-height width-80 flex-start">
            <FontAwesomeIcon className="auth-error-icon margin-right-10" icon={faWarning} />
            <p className="auth-error auto-height width-80 margin-vertical-20">{errorMessage}</p>
        </div>
        
    )
}

export default AuthError