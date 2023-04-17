
import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import { useSupabaseClient } from "@supabase/auth-helpers-react"

import FullPageWrapper from "../components/FullPageWrapper"
import AuthLogo from "../elements/AuthLogo"
import AuthHeading from "../elements/AuthHeading"
import AuthForm from "../components/AuthForm"
import AuthInput from "../elements/AuthInput"
import AuthButton from "../elements/AuthButton"
import AuthLink from "../elements/AuthLink"
import AuthError from "../elements/AuthError"


const Register = () => {

    const supabase = useSupabaseClient()
    const router = useRouter()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const handleSubmit = async (e) => {

        e.preventDefault()
        setPending(true)
        setError("")

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password
            })

            if (error) {
                setError(error.message)
                setPending(false)
                return
            }

            router.push("/dashboard/details")

        } catch (error) {
            setError(error.message)
            setPending(false)
        }
    }

    return (
        <>
        <Head>
            <title>Register for an account | cv-builder</title>
        </Head>
        <FullPageWrapper>
            <AuthLogo />
            <AuthHeading content="Register for an account" />
            <AuthForm onSubmit={handleSubmit}>
                <AuthInput type="email" state={email} setState={setEmail} placeholder="Enter your email" />
                <AuthInput type="password" state={password} setState={setPassword} placeholder="Enter a password" />
                <AuthButton pending={pending} content="Get started" />
                { error && <AuthError errorMessage={error} /> }
            </AuthForm>                
            <AuthLink href="/sign-in" content="Already got an account?" />
        </FullPageWrapper>
        </>
    )
}

export default Register