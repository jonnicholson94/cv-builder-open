
type Props = {
    title: string,
    employer: string,
    start: string,
    end: string,
    onDragOver,
    onDragStart,
    onDrop
}

const DashboardListItem = ({ title, employer, start, end, onDragOver, onDragStart, onDrop }: Props) => {
    return (
        <div className="dashboard-list width-100 flex-center" draggable onDragOver={onDragOver} onDragStart={onDragStart} onDrop={onDrop} onTouchStart={onDragStart} onTouchEnd={onDrop} onTouchMove={onDragOver} id={title}>
            <p className="dashboard-list-item list-main width-30">{title}</p>
            <p className="dashboard-list-item width-30">{employer}</p>
            <p className="dashboard-list-item width-20">{start}</p>
            <p className="dashboard-list-item width-20">{end}</p>
        </div>
    )
}

export default DashboardListItem