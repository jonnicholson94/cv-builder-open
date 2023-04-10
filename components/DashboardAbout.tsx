
import { useState } from "react"

import DashboardTextarea from "../elements/DashboardTextarea"

const DashboardAbout = () => {

    const [about, setAbout] = useState<string>("")

    return (
        <>
            <DashboardTextarea placeholder="Enter some details about yourself" state={about} setState={setAbout} />
        </>
    )
}

export default DashboardAbout