//
//
// ToDo: Login form validations (form fields, request status notification)
//
//
import Button from "../primitives/Button.jsx"
import { useDeleteSpaceMutation } from "../../hooks/useDeleteSpaceMutation.jsx"
import { useParams } from "react-router-dom"

export default function DeleteSpaceForm({ onClose }) {
    const { spaceId } = useParams()
    console.log(spaceId)

    const deleteSpaceMutation = useDeleteSpaceMutation(spaceId)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("click delete")
        deleteSpaceMutation.mutate(spaceId)
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div>
            <div className="px-2 pb-4 pt-2 text-sm">
                Are you sure you want to delete this space? <br />
                👉 No backsies!
            </div>
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}>
                <div className="flex items-center justify-end gap-2">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="danger"
                        text="Yes delete this space forever"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
