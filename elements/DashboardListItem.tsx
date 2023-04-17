
import Link from "next/link"

import { handleDrag, handleDragOver, handleDrop } from "../lib/dragFunctions"
import { CreatedEducation, CreatedJob, CreatedSideProject } from "../types/data"

type Props = {
    id: string
    index: number,
    title: string,
    employer: string,
    start: string,
    end: string,
    dragId: string,
    setDragId: React.Dispatch<React.SetStateAction<string>>,
    state: CreatedJob[],
    setState: React.Dispatch<React.SetStateAction<CreatedJob[] | CreatedEducation[] | CreatedSideProject[]>>
}

const DashboardListItem = ({ id, index, title, employer, start, end, dragId, setDragId, state, setState }: Props) => {

    // draggable onDragOver={handleDragOver} onDragStart={(ev) => handleDrag(ev, setDragId)} onDrop={(ev) => handleDrop(ev, state, dragId, setState)} 

    return (
        <Link className="dashboard-list width-100 flex-center" href={`/view-job?id=${id}`} key={index}>
            <p className="dashboard-list-item list-main width-30">{title}</p>
            <p className="dashboard-list-item width-30">{employer}</p>
            <p className="dashboard-list-item width-20">{start}</p>
            <p className="dashboard-list-item width-20">{end}</p>
        </Link>
    )
}

export default DashboardListItem