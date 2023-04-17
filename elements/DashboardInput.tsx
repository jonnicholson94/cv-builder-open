
import { useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";

import { handleKeyPress, handleChange } from "../lib/inputFunctions";
import InputError from "./InputError";

type Props = {
    placeholder: string,
    type: string,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    submit
}

const DashboardInput = ({ placeholder, type, state, setState, submit }: Props) => { 

    const [error, setError] = useState<string>("")
    
    const user = useUser()

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {

        if (state.length === 0) {
            return
        }

        submit(state, user.id)

    }

    return (
        <>
        <input 
            className={error ? `dashboard-input dashboard-input-error` : "dashboard-input"}
            placeholder={placeholder} 
            type={type}
            value={state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setState, setError)} 
            onBlur={handleBlur}
            onKeyDown={handleKeyPress} />
        { error && <InputError error={error} /> }
        </>
    )
}

export default DashboardInput