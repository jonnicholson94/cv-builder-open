
import DashboardLabel from "./DashboardLabel"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const AddDateInput = ({ name, content, state, setState }) => {

    const handleChange = (e) => {
        setState(e.target.value)
    }

    return (
        <>
            <DashboardLabel htmlFor={name} content={content} />
            <input className={`${inter.className} dashboard-input`} type="date" value={state} onChange={handleChange} />
        </>
    )
}

export default AddDateInput