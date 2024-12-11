import Modal from "./Modal.jsx"
import LoginForm from "../forms/LoginForm.jsx"

export default function LoginModal({ setShowLoginModal }) {
    const handleClose = () => setShowLoginModal(false)

    return (
        <Modal
            modalHeader="Log In"
            modalContent={<LoginForm onClose={handleClose} />}
            onClose={handleClose}
        />
    )
}
