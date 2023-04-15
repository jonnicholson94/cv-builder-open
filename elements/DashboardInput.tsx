
import { useUser } from "@supabase/auth-helpers-react";
import useInputUpdate from "../lib/hooks/useInputUpdate";

type Props = {
    placeholder: string,
    type: string,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    submit
}

const DashboardInput = ({ placeholder, type, state, setState, submit }: Props) => { 
    
    const user = useUser()

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {

        submit(state, user.id)

    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.code === "Enter") {
            (e.target as HTMLElement).blur()
        }
        
    }

    return (
        <input 
            className="dashboard-input" 
            placeholder={placeholder} 
            type={type}
            value={state}
            onChange={handleChange} 
            onBlur={handleBlur}
            onKeyDown={handleEnterPress} />
    )
}

export default DashboardInput