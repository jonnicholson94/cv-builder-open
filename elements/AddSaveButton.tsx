import Spinner from "./Spinner"

const AddSaveButton = ({ pending }) => {
    return (
        <button className="add-save-button width-100 margin-vertical-30">
            { pending ? <Spinner /> : "Save" }
        </button>
    )
}

export default AddSaveButton