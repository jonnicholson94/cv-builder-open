import Spinner from "../elements/Spinner"
import FullPageWrapper from "./FullPageWrapper"

const Pending = () => {
    return (
        <FullPageWrapper>
            <img className="auth-logo" src="/logos/square-logo-white.png" />
            <h2 className="margin-vertical-30">Fetching your data</h2>
            <Spinner />
        </FullPageWrapper>
    )
}

export default Pending