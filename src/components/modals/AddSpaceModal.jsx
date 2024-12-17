import Modal from "./Modal.jsx"
import AddSpaceForm from "../forms/AddSpaceForm.jsx"

export default function AddSpaceModal({ setShowAddSpaceModal }) {
    return (
        <Modal
            modalHeader="Add Space"
            modalContent={
                <AddSpaceForm onClose={() => setShowAddSpaceModal(false)} />
            }
            onClose={() => setShowAddSpaceModal(false)}
        />
    )
}
