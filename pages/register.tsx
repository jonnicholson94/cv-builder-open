
import { useState } from "react"

import FullPageWrapper from "../components/FullPageWrapper"
import AuthLogo from "../elements/AuthLogo"
import AuthHeading from "../elements/AuthHeading"
import AuthForm from "../components/AuthForm"
import AuthInput from "../elements/AuthInput"
import AuthButton from "../elements/AuthButton"
import AuthLink from "../elements/AuthLink"

const Register = () => {

    const [email, setEmail] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)

    return (
        <FullPageWrapper>
            <AuthLogo />
            <AuthHeading content="Register for an account" />
            <AuthForm>
                <AuthInput type="email" state={email} setState={setEmail} placeholder="Enter your email" />
                <AuthButton pending={pending} content="Get started" />
            </AuthForm>                
            <AuthLink href="/sign-in" content="Already got an account?" />
        </FullPageWrapper>
    )
}

export default Register