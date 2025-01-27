import Button from "../../components/primitives/Button.jsx"
import { HiPlus } from "react-icons/hi"
import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import Note from "./Note.jsx"
import { secondsToTime } from "../../utils/formatting.js"
import video from "../../data/dummyData/demoVideo.json"
import AddNoteModal from "../../components/modals/AddNoteModal.jsx"
import EditNoteModal from "../../components/modals/EditNoteModal.jsx"
import DeleteNoteModal from "../../components/modals/DeleteNoteModal.jsx"
import { useState } from "react"

export default function NotesSection({
    videoNotes,
    activeVideoNote,
    setActiveVideoNote,
    videoId,
    getCurrentTime,
    nearestNoteActive,
}) {
    const [showAddNoteModal, setShowAddNoteModal] = useState()
    const [showEditNoteModal, setShowEditNoteModal] = useState()
    const [showDeleteNoteModal, setShowDeleteNoteModal] = useState()
    const [currentTimeStampApi, setCurrentTimeStampApi] = useState()

    //Note Variables
    //const [videoNotes, setVideoNotes] = useState([])
    //const propObject = notePayload
    //Test Note patching
    //let currentTimeStamp = Math.round(Math.random() * 500)

    const newNotePayload = {
        note_timestamp: currentTimeStampApi,
        video: videoId,
        video_id: videoId,
    }
    const handleNoteClick = (note) => {
        console.log("clicked note: ", note)
        setActiveVideoNote(note)
        // setActiveNoteDescription(note.note_description)
        // setActiveVideoNoteTitle(note.note_title)
        // setActiveNoteTimestamp(note.note_timestamp)
    }

    //Active Note Variables
    //const [activeVideoNote, setActiveVideoNote] = useState(videoNotes[0])
    // const [activeVideoNoteTitle, setActiveVideoNoteTitle] = useState("")
    // const [activeNoteDescription, setActiveNoteDescription] = useState("")
    // const [activeNoteTimestamp, setActiveNoteTimestamp] = useState()

    //Note Handlings
    const editNoteTitle = () => {
        console.log("Editing note title")
    }

    const handleAddNote = () => {
        console.log("Adding note")
        setShowAddNoteModal(true)
        setCurrentTimeStampApi(getCurrentTime())
    }

    const noteModals = (
        <>
            {showAddNoteModal && (
                <AddNoteModal
                    propObject={newNotePayload}
                    setShowAddNoteModal={setShowAddNoteModal}
                />
            )}
            {showEditNoteModal && (
                <EditNoteModal
                    setShowEditNoteModal={setShowEditNoteModal}
                    activeVideoNote={activeVideoNote}
                />
            )}

            {showDeleteNoteModal && (
                <DeleteNoteModal
                    setShowDeleteNoteModal={setShowDeleteNoteModal}
                    activeVideoNote={activeVideoNote}
                />
            )}
        </>
    )

    return (
        <div>
            {noteModals}
            <div className="mb-4 flex items-center">
                <Button
                    iconStart={<HiPlus />}
                    text="Add Note"
                    type="primary"
                    className="mr-4"
                    onClick={handleAddNote}
                />
                <HelpLabel text="Add a note at the current time" />
            </div>
            <div className="">
                <div className="mr-4 text-lg font-semibold">Your Notes</div>
                <div className="rounded-xl border border-gray-300">
                    {videoNotes.map((note, index) => (
                        <Note
                            note={note}
                            key={note.id}
                            active={note.id === activeVideoNote.id}
                            time={secondsToTime(note.note_timestamp)}
                            onClick={handleNoteClick}
                            isFirst={index === 0}
                            isLast={index === video.notes.length - 1}
                            editNoteTitle={editNoteTitle}
                            setShowEditNoteModal={setShowEditNoteModal}
                            setShowDeleteNoteModal={setShowDeleteNoteModal}
                            nearestNoteActiveBool={
                                note.id === nearestNoteActive.id
                            }
                            nearestNoteActive={nearestNoteActive}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
