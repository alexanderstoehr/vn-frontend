import Modal from "./Modal.jsx"
import AddNoteForm from "../forms/AddNoteForm.jsx"

export default function AddNoteModal({ setShowAddNoteModal, propObject }) {
    return (
        <Modal
            modalHeader="Add Note"
            modalContent={
                <AddNoteForm
                    propObject={propObject}
                    onClose={() => setShowAddNoteModal(false)}
                />
            }
            onClose={() => setShowAddNoteModal(false)}
        />
    )
}
