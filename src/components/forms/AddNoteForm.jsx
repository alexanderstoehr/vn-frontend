import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useEffect, useState } from "react"
import { useAddNoteMutation } from "../../hooks/useAddNoteMutation.jsx"

export default function AddNoteForm({ onClose, propObject }) {
    const addNote = useAddNoteMutation()

    const [noteTitle, setNoteTitle] = useState()
    const notePayload = {
        note_title: noteTitle,
        video_id: propObject.video_id,
        video: propObject.video_id,
        note_timestamp: propObject.note_timestamp,
        note_description: "Add your note description here...",
    }

    console.log("Probject: ", propObject)

    console.log("note title: ", noteTitle)

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote.mutate(notePayload, {
            onSuccess: () => {
                onClose()
            },
        })

        console.log("submitted: ", noteTitle)
        onClose()
    }

    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                handleSubmit(e)
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [handleSubmit])

    return (
        <div>
            <div className="px2 pb-4 pt-2 text-sm">Add your space man!</div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4">
                <InputTextLine
                    placeholder="Note Name"
                    type="text"
                    onChange={(e) => setNoteTitle(e.target.value)}
                    autoFocus
                />
                <div className="flex items-center justify-end">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="primary"
                        text="Add Note"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
