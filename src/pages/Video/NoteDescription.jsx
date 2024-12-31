import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import Button from "../../components/primitives/Button.jsx"
import { useEffect, useRef, useState } from "react"
import { useEditNoteMutation } from "../../hooks/useEditNoteMutation.jsx"

export default function NoteDescription({ activeVideoNote }) {
    // when current data differs from server data = false --- check on video or note state changes
    const [saved, setSaved] = useState(true)

    const noteDescriptionRef = useRef(null)

    const patchNoteDescription = useEditNoteMutation()

    const [noteDescription, setNoteDescription] = useState(
        activeVideoNote.note_description
    )
    //console.log("Active Note from note description: ", activeVideoNote)

    const handleDescriptionChange = (e) => {
        // console.log("value: ", e.target.value)
        setNoteDescription(e.target.value)
    }

    const handleSaveClick = () => {
        console.log("Save clicked, note description: ", noteDescription)
        patchNoteDescription.mutate(
            {
                id: activeVideoNote.id,
                note_description: noteDescription,
            },
            {
                onSuccess: () => {
                    setSaved(true)
                },
            }
        )
    }

    useEffect(() => {
        setNoteDescription(activeVideoNote.note_description)
    }, [activeVideoNote])

    useEffect(() => {
        noteDescription === activeVideoNote.note_description
            ? setSaved(true)
            : setSaved(false)
    }, [noteDescription])

    return (
        <>
            <div className="">
                <div className="flex flex-col">
                    <HelpLabel text="Your current Note:" />
                    <div className="mb-2 flex items-center justify-between">
                        <div className="mb-4 text-lg font-semibold">
                            {activeVideoNote.note_title}
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500">
                                {saved ? "Saved" : "Unsaved Changes"}
                            </span>
                            <Button
                                text={
                                    saved ? "Nothing to save" : "Save Changes"
                                }
                                type={saved ? "disabled" : "primary"}
                                onClick={handleSaveClick}
                                disabled={saved}
                            />
                        </div>
                    </div>
                </div>
                <div className="">
                    <textarea
                        id="noteDescription"
                        ref={noteDescriptionRef}
                        placeholder="Add a note..."
                        className="min-h-96 w-full"
                        onChange={handleDescriptionChange}
                        value={noteDescription}
                    />
                </div>
            </div>
        </>
    )
}
