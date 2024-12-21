import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useEffect, useState } from "react"
import { useAddNoteMutation } from "../../hooks/useAddNoteMutation.jsx"
import { useQueryClient } from "@tanstack/react-query"

export default function AddNoteForm({ onClose, propObject }) {
    const addNote = useAddNoteMutation()
    const queryClient = useQueryClient()

    const [noteTitle, setNoteTitle] = useState()
    let videoID
    let timeStamp

    console.log("Probject: ", propObject)

    console.log("note title: ", noteTitle)

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote.mutate(propObject, {
            onSuccess: () => {
                queryClient.invalidateQueries("singleVideo")
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
            if (event.key === "Enter") {
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
