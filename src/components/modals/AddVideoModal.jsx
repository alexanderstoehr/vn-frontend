import Modal from "./Modal.jsx"
import AddVideoForm from "../forms/AddVideoForm.jsx"

export default function AddVideoModal({ setShowAddVideoModal }) {
    return (
        <Modal
            modalHeader="Add Video"
            modalContent={
                <AddVideoForm onClose={() => setShowAddVideoModal(false)} />
            }
            onClose={() => setShowAddVideoModal(false)}
        />
    )
}
