import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useEffect, useState, useRef } from "react"
import { useEditNoteMutation } from "../../hooks/useEditNoteMutation.jsx"

export default function EditNoteForm({ onClose, activeVideoNote }) {
    const editNote = useEditNoteMutation()
    const [noteTitle, setNoteTitle] = useState(activeVideoNote.note_title)
    //useRef to store the current value of the note title in the --> current render
    //useRef keeps the value of the note title in sync with the input field without causing a re-render
    //this fixes the not updating state if the user types fast and sends with enter key
    const noteTitleRef = useRef(noteTitle)

    const notePayload = {
        id: activeVideoNote.id,
        note_title: noteTitle,
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editNote.mutate(
            { ...notePayload, note_title: noteTitleRef.current },
            {
                onSuccess: () => {
                    onClose()
                },
            }
        )
        console.log("submitted: ", noteTitleRef.current)
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

    //Update the ref value when the note title changes
    useEffect(() => {
        noteTitleRef.current = noteTitle
    }, [noteTitle])

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
                    value={noteTitle}
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
