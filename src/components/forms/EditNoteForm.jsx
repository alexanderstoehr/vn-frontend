import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useEffect, useState } from "react"
import { editNoteMutation } from "../../api/mutations/editNoteMutation.js"

export default function EditNoteForm({ onClose, activeVideoNote }) {
    const editNote = editNoteMutation()

    const [noteTitle, setNoteTitle] = useState()
    const notePayload = {}
    console.log("note: ", activeVideoNote)
    console.log("note title: ", activeVideoNote.note_title)

    const handleSubmit = (e) => {
        e.preventDefault()
        editNote.mutate(notePayload, {
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
    }, [])

    return (
        <div>
            <div className="px2 pb-4 pt-2 text-sm"></div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4">
                <InputTextLine
                    placeholder="Note Name"
                    type="text"
                    onChange={(e) => setNoteTitle(e.target.value)}
                    autoFocus
                    value={activeVideoNote.note_title}
                />
                <div className="flex items-center justify-end">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="primary"
                        text="Save Note"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
