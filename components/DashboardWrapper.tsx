
import { useEffect, useRef } from "react"
import { useAppDispatch } from "../lib/reduxHelpers"
import { changeActive } from "../features/activeSlice"

const DashboardWrapper = ({ children }) => {

    const wrapper = useRef(null)
    const dispatch = useAppDispatch()

    const handleKeyboardEvents = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.shiftKey && e.code === "KeyS") {
            console.log("save pressed");
        }

        if (e.ctrlKey && e.code === "KeyV") {
            console.log("view cv pressed");
        }

        if (e.ctrlKey && e.code === "KeyD") {
            dispatch(changeActive("Your details"))
        }

        if (e.ctrlKey && e.code === "KeyC") {
            dispatch(changeActive("Contact details"))
        }

        if (e.ctrlKey && e.code === "KeyJ") {
            dispatch(changeActive("Job history"))
        }

        if (e.ctrlKey && e.code === "KeyE") {
            dispatch(changeActive("Education"))
        }

        if (e.ctrlKey && e.code === "KeyP") {
            dispatch(changeActive("Side projects"))
        }

        if (e.ctrlKey && e.code === "KeyA") {
            dispatch(changeActive("About"))
        }

        if (e.ctrlKey && e.code === "KeyS") {
            dispatch(changeActive("Skills"))
        }
    }

    useEffect(() => {

        wrapper.current.focus()

        if (wrapper.current !== null) {
            console.log("Running inside of if..");
            wrapper.current.addEventListener("keydown", handleKeyboardEvents)
        }

        return wrapper.current.removeEventListener("keydown", handleKeyboardEvents)
    }, [wrapper])

    return (
        <div className="dashboard-wrapper full-vh full-vw flex-center" ref={wrapper} onKeyDown={handleKeyboardEvents} tabIndex={-1}>
            {children}
        </div>
    )
}

export default DashboardWrapper