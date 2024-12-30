import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import Button from "../../components/primitives/Button.jsx"
import { useEffect, useRef, useState } from "react"

export default function NoteDescription({ activeVideoNote }) {
    // when current data differs from server data = false --- check on video or note state changes
    const [saved, setSaved] = useState(true)

    const noteDescriptionRef = useRef(null)

    const [noteDescription, setNoteDescription] = useState(
        activeVideoNote.note_description
    )
    console.log("Active Note from note description: ", activeVideoNote)

    const handleDescriptionChange = (e) => {
        console.log("value: ", e.target.value)
        setNoteDescription(e.target.value)
    }

    const handleSaveClick = () => {
        console.log("Save clicked")
    }

    useEffect(() => {
        setNoteDescription(activeVideoNote.note_description)
    }, [activeVideoNote])

    return (
        <>
            <div className="">
                <div className="flex flex-col">
                    <HelpLabel text="Your current Note:" />
                    <div className="flex items-center justify-between">
                        <div className="mb-4 text-lg font-semibold">
                            {activeVideoNote.note_title}
                        </div>
                        <Button
                            text="Save"
                            type="primary"
                            onClick={handleSaveClick}
                        />
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
