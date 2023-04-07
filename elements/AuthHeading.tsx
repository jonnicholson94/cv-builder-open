
type Props = {
    content: string
}

const AuthHeading = ({ content }: Props) => {
    return (
        <h2>{content}</h2>
    )
}

export default AuthHeading