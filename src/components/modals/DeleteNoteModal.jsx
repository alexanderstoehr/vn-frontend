import Modal from "./Modal.jsx"
import DeleteNoteForm from "../forms/DeleteNoteForm.jsx"

export default function DeleteNoteModal({
    setShowDeleteNoteModal,
    activeVideoNote,
}) {
    return (
        <Modal
            modalHeader="Delete Note"
            modalContent={
                <DeleteNoteForm
                    activeVideoNote={activeVideoNote}
                    onClose={() => setShowDeleteNoteModal(false)}
                />
            }
            onClose={() => setShowDeleteNoteModal(false)}
        />
    )
}
