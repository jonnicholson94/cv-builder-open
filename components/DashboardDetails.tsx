
import DashboardLabel from "../elements/DashboardLabel"
import DashboardInput from "../elements/DashboardInput"
import DashboardPhotoInput from "../elements/DashboardPhotoInput"

type Props = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>
}

const DashboardDetails = ({ name, setName }: Props) => {
    return (
        <>
            <DashboardLabel htmlFor="name" content="Your name" />
            <DashboardInput placeholder="Enter your name" type="text" state={name} setState={setName} />
            <DashboardLabel htmlFor="photo" content="Your photo" />
            <DashboardPhotoInput />
        </>
    )
}

export default DashboardDetails