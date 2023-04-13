import DashboardInput from "../elements/DashboardInput"
import DashboardLabel from "../elements/DashboardLabel"

type Props = {
    twitter: string,
    setTwitter: React.Dispatch<React.SetStateAction<string>>,
    linkedIn: string,
    setLinkedIn: React.Dispatch<React.SetStateAction<string>>,
    github: string,
    setGithub: React.Dispatch<React.SetStateAction<string>>
}

const DashboardSocials = ({ twitter, setTwitter, linkedIn, setLinkedIn, github, setGithub }: Props) => {
    return (
        <>
            <DashboardLabel htmlFor="twitter" content="Twitter" />
            <DashboardInput placeholder="Enter your Twitter address" type="text" state={twitter} setState={setTwitter}  />
            <DashboardLabel htmlFor="linkedIn" content="LinkedIn" />
            <DashboardInput placeholder="Enter your LinkedIn profile" type="text" state={linkedIn} setState={setLinkedIn}  />
            <DashboardLabel htmlFor="github" content="Github" />
            <DashboardInput placeholder="Enter your GitHub profile" type="text" state={github} setState={setGithub}  />
        </>
    )
}

export default DashboardSocials