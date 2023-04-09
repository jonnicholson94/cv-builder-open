import DashboardInput from "../elements/DashboardInput"
import DashboardLabel from "../elements/DashboardLabel"

type Props = {
    phone: string,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    twitter: string,
    setTwitter: React.Dispatch<React.SetStateAction<string>>,
    linkedIn: string,
    setLinkedIn: React.Dispatch<React.SetStateAction<string>>,
    github: string,
    setGithub: React.Dispatch<React.SetStateAction<string>>
}

const DashboardContact = ({ phone, setPhone, email, setEmail, twitter, setTwitter, linkedIn, setLinkedIn, github, setGithub }: Props) => {
    return (
        <>
            <DashboardLabel htmlFor="phone" content="Phone number" />
            <DashboardInput placeholder="Enter your phone number" type="phone" state={phone} setState={setPhone}  />
            <DashboardLabel htmlFor="email" content="Email" />
            <DashboardInput placeholder="Enter your email" type="email" state={email} setState={setEmail}  />
            <DashboardLabel htmlFor="twitter" content="Twitter" />
            <DashboardInput placeholder="Enter your Twitter address" type="text" state={twitter} setState={setTwitter}  />
            <DashboardLabel htmlFor="linkedIn" content="LinkedIn" />
            <DashboardInput placeholder="Enter your LinkedIn profile" type="text" state={linkedIn} setState={setLinkedIn}  />
            <DashboardLabel htmlFor="github" content="Github" />
            <DashboardInput placeholder="Enter your GitHub profile" type="text" state={github} setState={setGithub}  />
        </>
    )
}

export default DashboardContact