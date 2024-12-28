//
//
// ToDo: Login form validations (form fields, request status notification)
//
//
import Button from "../primitives/Button.jsx"
import { useParams } from "react-router-dom"
import { useDeleteVideoMutation } from "../../hooks/useDeleteVideoMutation.jsx"

export default function DeleteVideoForm({ onClose }) {
    const { videoId } = useParams()
    // console.log("Video Id: ",videoId)

    const deleteVideoMutation = useDeleteVideoMutation(videoId)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("Clicked delete video.")
        deleteVideoMutation.mutate(videoId)
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div>
            <div className="px-2 pb-4 pt-2 text-sm">
                Are you sure you want to delete this Video? <br />
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
                        text="Yes delete this video forever"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
