import Modal from "./Modal.jsx"
import DeleteSpaceForm from "../forms/DeleteSpaceForm.jsx"

export default function DeleteSpaceModal({ setShowDeleteSpaceModal }) {
    return (
        <Modal
            modalHeader="Delete Space"
            modalContent={<DeleteSpaceForm />}
            onClose={() => setShowDeleteSpaceModal(false)}
        />
    )
}
