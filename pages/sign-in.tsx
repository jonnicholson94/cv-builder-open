
import { useState } from "react"
import Head from "next/head"

import AuthForm from "../components/AuthForm"
import FullPageWrapper from "../components/FullPageWrapper"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLink from "../elements/AuthLink"
import AuthLogo from "../elements/AuthLogo"
import AuthButton from "../elements/AuthButton"

const SignIn = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)

    return (
        <>
        <Head>
            <title>Sign in to your account | cv-builder</title>
        </Head>
        <FullPageWrapper>
            <AuthLogo />
            <AuthHeading content="Sign in to your account" />
            <AuthForm>
                <AuthInput type="email" placeholder="Enter your email" state={email} setState={setEmail} />
                <AuthInput type="password" placeholder="Enter your password" state={password} setState={setPassword} />
                <AuthButton pending={pending} content="Continue" />
            </AuthForm>
            <AuthLink href="/register" content="Not got an account?" />
            <AuthLink href="/forgot-password" content="Forgot your password" />
        </FullPageWrapper>
        </>
    )
}

export default SignIn