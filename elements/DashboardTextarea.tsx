
import { useUser } from '@supabase/auth-helpers-react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
    placeholder: string,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    submit
}

const DashboardTextarea = ({ placeholder, state, setState, submit }: Props) => {

    const user = useUser()

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        submit(state, user.id)
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState(e.target.value)
    }

    const handleEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {

        if (e.code === "Enter") {
            (e.target as HTMLElement).blur()
        }
        
    }


    return (
        <textarea 
            className={`dashboard-textarea width-100 ${inter.className}`} 
            placeholder={placeholder} 
            value={state} 
            onChange={handleChange}
            onBlur={handleBlur} 
            onKeyDown={handleEnterPress} />
    )
}

export default DashboardTextarea