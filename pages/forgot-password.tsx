
import { useState } from "react"
import Head from "next/head"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

import AuthForm from "../components/AuthForm"
import FullPageWrapper from "../components/FullPageWrapper"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLink from "../elements/AuthLink"
import AuthLogo from "../elements/AuthLogo"
import AuthButton from "../elements/AuthButton"
import AuthError from "../elements/AuthError"
import AuthSuccess from "../elements/AuthSuccess"

const ForgotPassword = () => {

    const supabase = useSupabaseClient()

    const [email, setEmail] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    const handleSubmit = async (e) => {

        e.preventDefault()
        
        setError("")
        setPending(true)

        try {

            const { data, error } = await supabase.auth.resetPasswordForEmail(email)

            if (error) {
                setError(error.message)
                setPending(false)
            } else {
                setSuccess("Password reset sent!")
                setPending(false)
            }
        } catch (error) {
            setError(error.message)
            setPending(false)
        }
    }

    return (
        <>
        <Head>
            <title>Request a password reset | cv-builder</title>
        </Head>
        <FullPageWrapper>
            <AuthLogo />
            <AuthHeading content="Request a password reset" />
            <AuthForm onSubmit={handleSubmit}>
                <AuthInput type="email" placeholder="Enter your email" state={email} setState={setEmail} />
                <AuthButton pending={pending} content="Request password reset" />
                { success && <AuthSuccess successMessage={success} /> }
                { error && <AuthError errorMessage={error} /> }
            </AuthForm>
            <AuthLink href="/sign-in" content="Back to sign in" />
        </FullPageWrapper>
        </>
    )
}

export default ForgotPassword