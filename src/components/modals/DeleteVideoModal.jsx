import Modal from "./Modal.jsx"
import DeleteVideoForm from "../forms/DeleteVideoForm.jsx"

export default function DeleteVideoModal({ setShowDeleteVideoModal }) {
    return (
        <Modal
            modalHeader="Delete Video"
            modalContent={<DeleteVideoForm />}
            onClose={() => setShowDeleteVideoModal(false)}
        />
    )
}
