
import { useState } from "react"
import Head from "next/head"

import FullPageWrapper from "../components/FullPageWrapper"
import AuthLogo from "../elements/AuthLogo"
import AuthHeading from "../elements/AuthHeading"
import AuthForm from "../components/AuthForm"
import AuthInput from "../elements/AuthInput"
import AuthButton from "../elements/AuthButton"
import AuthLink from "../elements/AuthLink"

const Register = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)

    return (
        <>
        <Head>
            <title>Register for an account | cv-builder</title>
        </Head>
        <FullPageWrapper>
            <AuthLogo />
            <AuthHeading content="Register for an account" />
            <AuthForm>
                <AuthInput type="email" state={email} setState={setEmail} placeholder="Enter your email" />
                <AuthInput type="password" state={password} setState={setPassword} placeholder="Enter a password" />
                <AuthButton pending={pending} content="Get started" />
            </AuthForm>                
            <AuthLink href="/sign-in" content="Already got an account?" />
        </FullPageWrapper>
        </>
    )
}

export default Register