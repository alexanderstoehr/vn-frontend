import Button from "../primitives/Button.jsx"
import { useDeleteNoteMutation } from "../../hooks/useDeleteNoteMutation.jsx"

export default function DeleteNoteForm({ onClose, activeVideoNote }) {
    const noteId = activeVideoNote.id
    // console.log("Video Id: ",videoId)
    // console.log("Active Video Note: ", activeVideoNote)

    const deleteNoteMutation = useDeleteNoteMutation(noteId)

    const handleSubmit = (e) => {
        e.preventDefault()
        deleteNoteMutation.mutate(noteId)
        onClose()
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div>
            <div className="px-2 pb-4 pt-2 text-sm">
                Are you sure you want to delete this Note? <br />
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
                        text="Yes delete this note forever"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
