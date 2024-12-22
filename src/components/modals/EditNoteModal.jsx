import Modal from "./Modal.jsx"
import EditNoteForm from "../forms/EditNoteForm.jsx"

export default function EditNoteModal({
    setShowEditNoteModal,
    activeVideoNote,
}) {
    return (
        <Modal
            modalHeader="Edit Note"
            modalContent={
                <EditNoteForm
                    activeVideoNote={activeVideoNote}
                    onClose={() => setShowEditNoteModal(false)}
                />
            }
            onClose={() => setShowEditNoteModal(false)}
        />
    )
}
