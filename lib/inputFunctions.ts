import { SetStateAction } from "react"
import { validateEmail, validateLength } from "./inputValidation"

export const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.code === "Enter") {
        (e.target as HTMLElement).blur()
    }
    
}

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<SetStateAction<string>>, setError: React.Dispatch<SetStateAction<string>>) => {

    setState(e.target.value)

    if (e.target.type === "text") {
        setError(() => validateLength(e.target.value))
    } else if (e.target.type === "email") {
        setError(() => validateEmail(e.target.value))
    }

}