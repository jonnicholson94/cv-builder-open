import Spinner from "./Spinner"

type Props = {
    pending: boolean,
    content: string
}

const AuthButton = ({ pending, content }: Props) => {
    return (
        <button className="auth-button">
            { pending ? <Spinner /> : <p>{content}</p> }
        </button>
    )
}

export default AuthButton