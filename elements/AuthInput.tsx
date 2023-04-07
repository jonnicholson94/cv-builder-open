
type Props = {
    type: string,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string
}

const AuthInput = ({ type, state, setState, placeholder }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    return (
        <input className="auth-input" type={type} value={state} placeholder={placeholder} onChange={handleChange} />
    )
}

export default AuthInput