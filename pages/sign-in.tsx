
import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

import AuthForm from "../components/AuthForm"
import FullPageWrapper from "../components/FullPageWrapper"
import AuthHeading from "../elements/AuthHeading"
import AuthInput from "../elements/AuthInput"
import AuthLink from "../elements/AuthLink"
import AuthLogo from "../elements/AuthLogo"
import AuthButton from "../elements/AuthButton"
import AuthError from "../elements/AuthError"

const SignIn = () => {

    const supabase = useSupabaseClient()
    const router = useRouter()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const handleSubmit = async (e) => {

        e.preventDefault()
        setPending(true)

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (error) {
                setError(error.message)
                setPending(false)
            } else {
                router.push("/dashboard")
            }

        } catch (error) {
            setError(error.message)
            setPending(false)
        }
    }

    return (
        <>
        <Head>
            <title>Sign in to your account | cv-builder</title>
        </Head>
        <FullPageWrapper>
            <AuthLogo />
            <AuthHeading content="Sign in to your account" />
            <AuthForm onSubmit={handleSubmit}>
                <AuthInput type="email" placeholder="Enter your email" state={email} setState={setEmail} />
                <AuthInput type="password" placeholder="Enter your password" state={password} setState={setPassword} />
                <AuthButton pending={pending} content="Continue" />
                { error && <AuthError errorMessage={error} /> }
            </AuthForm>
            <AuthLink href="/register" content="Not got an account?" />
            <AuthLink href="/forgot-password" content="Forgot your password" />
        </FullPageWrapper>
        </>
    )
}

export default SignIn