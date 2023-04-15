
const AddForm = ({ children, onSubmit }) => {
    return (
        <form className="width-60 flex-center flex-column" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default AddForm