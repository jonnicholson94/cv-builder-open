
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
    placeholder: string,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const DashboardTextarea = ({ placeholder, state, setState }: Props) => {

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value);
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState(e.target.value)
    }


    return (
        <textarea 
            className={`dashboard-textarea width-100 ${inter.className}`} 
            placeholder={placeholder} 
            value={state} 
            onChange={handleChange}
            onBlur={handleBlur} />
    )
}

export default DashboardTextarea