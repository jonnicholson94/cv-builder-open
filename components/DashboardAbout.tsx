
import { useState } from "react"
import useInputUpdate from "../lib/hooks/useInputUpdate"

import DashboardTextarea from "../elements/DashboardTextarea"

const DashboardAbout = () => {

    const [about, setAbout] = useState<string>("")

    const { updateAbout } = useInputUpdate()

    return (
        <>
            <DashboardTextarea placeholder="Enter some details about yourself" state={about} setState={setAbout} submit={updateAbout} />
        </>
    )
}

export default DashboardAbout