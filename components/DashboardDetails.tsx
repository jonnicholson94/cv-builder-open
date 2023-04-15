
import useInputUpdate from "../lib/hooks/useInputUpdate"

import DashboardLabel from "../elements/DashboardLabel"
import DashboardInput from "../elements/DashboardInput"

type Props = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    phone: string,
    setPhone: React.Dispatch<React.SetStateAction<string>>
}

const DashboardDetails = ({ name, setName, email, setEmail, phone, setPhone }: Props) => {

    const { updateName, updatePhone, updateEmail } = useInputUpdate()

    return (
        <>
            <DashboardLabel htmlFor="name" content="Your name" />
            <DashboardInput placeholder="Enter your name" type="text" state={name} setState={setName} submit={updateName} />
            <DashboardLabel htmlFor="email" content="Email" />
            <DashboardInput placeholder="Enter your email" type="email" state={email} setState={setEmail} submit={updateEmail} />
            <DashboardLabel htmlFor="name" content="Phone number" />
            <DashboardInput placeholder="Enter your phone number" type="text" state={phone} setState={setPhone} submit={updatePhone} />
        </>
    )
}

export default DashboardDetails