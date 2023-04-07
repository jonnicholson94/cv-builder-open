
const AuthForm = ({ children }) => {
    return (
        <form className="auth-form flex-center flex-column margin-vertical-50">
            {children}
        </form>
    )
}

export default AuthForm