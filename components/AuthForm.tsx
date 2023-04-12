
const AuthForm = ({ children, onSubmit }) => {
    return (
        <form className="auth-form flex-center flex-column margin-vertical-50" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default AuthForm