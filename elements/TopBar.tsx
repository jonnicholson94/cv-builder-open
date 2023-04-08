
import LogoLink from "./LogoLink"
import AvatarLink from "./AvatarLink"

const TopBar = () => {
    return (
        <div className="height-50 width-85 flex-center">
            <div className="width-50 flex-start">
                <LogoLink />       
            </div>
            <div className="width-50 flex-end">
                <AvatarLink />
            </div>
        </div>
    )
}

export default TopBar