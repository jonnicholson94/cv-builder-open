
import { useState } from "react"
import { validateEmail, validatePassword } from "../lib/inputValidation"

type Props = {
    type: "email" | "password",
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string
}

const AuthInput = ({ type, state, setState, placeholder }: Props) => {

    const [error, setError] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)

        if (e.target.type === "email") {
            setError(() => validateEmail(e.target.value))
        } else if (e.target.type === "password") {
            setError(() => validatePassword(e.target.value))
        }
    }

    return (
        <>
            <input className={error ? "auth-input auth-input-error" : "auth-input"} type={type} value={state} placeholder={placeholder} onChange={handleChange} />
            { error && <p className="auth-error auto-height width-80 margin-bottom-10">{error}</p>}
        </>
    )
}

export default AuthInput