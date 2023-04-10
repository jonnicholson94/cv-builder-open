import HelpCard from "./HelpCard"

const Toolbar = () => {
    return (
        <div className="toolbar auto-height flex-center">
            <p className="toolbar-title margin-side-20">Shortcuts</p>
            <HelpCard content="SHFT + S" side="top">
                <p className="toolbar-shortcut margin-vertical-10 margin-side-10">Save CV</p>
            </HelpCard>
            <HelpCard content="SHFT + V" side="top">
                <p className="toolbar-shortcut margin-vertical-10 margin-side-10">View CV</p>
            </HelpCard>
        </div>
    )
}

export default Toolbar

/**
 * SHFT + s = save data
 * SHFT + v = view CV
 * CTRL + d = view details
 * CTRL + c = view contact
 * CTRL + j = view job history
 * CTRL + e = view education
 * CTRL + p = view side projects
 * CTRL + a = view about
 * CTRL + s = view skills
 */