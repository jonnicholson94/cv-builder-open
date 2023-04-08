
type Props = {
    placeholder: string,
    type: string,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const DashboardInput = ({ placeholder, type, state, setState }: Props) => {

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    return (
        <input 
            className="dashboard-input" 
            placeholder={placeholder} 
            type={type}
            value={state}
            onChange={handleChange} 
            onBlur={handleBlur} />
    )
}

export default DashboardInput