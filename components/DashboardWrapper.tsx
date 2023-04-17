
import { useEffect, useRef } from "react"
import { useRouter } from "next/router"

const DashboardWrapper = ({ children }) => {

    const wrapper = useRef(null)
    const router = useRouter()

    const handleKeyboardEvents = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.shiftKey && e.code === "KeyS") {
            console.log("save pressed");
        }

        if (e.ctrlKey && e.code === "KeyV") {
            console.log("view cv pressed");
        }

        if (e.ctrlKey && e.code === "KeyD") {
            router.push("/dashboard/details")
        }

        if (e.ctrlKey && e.code === "KeyC") {
            router.push("/dashboard/socials")
        }

        if (e.ctrlKey && e.code === "KeyJ") {
            router.push("/dashboard/jobs")
        }

        if (e.ctrlKey && e.code === "KeyE") {
            router.push("/dashboard/education")
        }

        if (e.ctrlKey && e.code === "KeyP") {
            router.push("/dashboard/projects")
        }

        if (e.ctrlKey && e.code === "KeyA") {
            router.push("/dashboard/about")
        }

        if (e.ctrlKey && e.code === "KeyS") {
            router.push("/dashboard/skills")
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