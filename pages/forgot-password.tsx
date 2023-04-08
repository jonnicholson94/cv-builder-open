
import { useState } from "react"
import Head from "next/head"

import AuthForm from "../components/AuthForm"
import FullPageWrapper from "../components/FullPageWrapper"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLink from "../elements/AuthLink"
import AuthLogo from "../elements/AuthLogo"
import AuthButton from "../elements/AuthButton"

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)

    return (
        <>
        <Head>
            <title>Request a password reset | cv-builder</title>
        </Head>
        <FullPageWrapper>
            <AuthLogo />
            <AuthHeading content="Request a password reset" />
            <AuthForm>
                <AuthInput type="email" placeholder="Enter your email" state={email} setState={setEmail} />
                <AuthButton pending={pending} content="Request password reset" />
            </AuthForm>
            <AuthLink href="/sign-in" content="Back to sign in" />
        </FullPageWrapper>
        </>
    )
}

export default ForgotPassword