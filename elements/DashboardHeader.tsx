
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import Saving from "./Saving"
import { useAppSelector } from "../lib/reduxHelpers"

type Props = {
    setState: React.Dispatch<React.SetStateAction<boolean>>,
}

const DashboardHeader = ({ setState }: Props) => {

    const { active } = useAppSelector((state) => state.active)
    const { saving } = useAppSelector((state) => state.status)

    return (
        <div className="dashboard-header auto-height width-100 flex-center ">
            <div className="height-50 width-50 flex-start">
                <FontAwesomeIcon className="hamburger-icon margin-left-20" icon={faBars} onClick={() => setState(true)} />
                <h4 className="margin-left-20">{active}</h4>
            </div>
            <div className="height-50 width-50 flex-end">
                { saving && <Saving /> }
            </div>
        </div>
    )
}

export default DashboardHeader