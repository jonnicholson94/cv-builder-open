
import DashboardLabel from "../elements/DashboardLabel"
import DashboardInput from "../elements/DashboardInput"
import DashboardPhotoInput from "../elements/DashboardPhotoInput"

type Props = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    phone: string,
    setPhone: React.Dispatch<React.SetStateAction<string>>
}

const DashboardDetails = ({ name, setName, email, setEmail, phone, setPhone }: Props) => {
    return (
        <>
            <DashboardLabel htmlFor="name" content="Your name" />
            <DashboardInput placeholder="Enter your name" type="text" state={name} setState={setName} />
            <DashboardLabel htmlFor="email" content="Email" />
            <DashboardInput placeholder="Enter your email" type="email" state={email} setState={setEmail} />
            <DashboardLabel htmlFor="name" content="Phone number" />
            <DashboardInput placeholder="Enter your phone number" type="text" state={phone} setState={setPhone} />
        </>
    )
}

export default DashboardDetails