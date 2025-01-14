import Modal from "./Modal.jsx"
import LoginForm from "../forms/LoginForm.jsx"

export default function LoginModal({
    setShowLoginModal,
    setShowPasswordResetModal,
}) {
    const handleClose = () => setShowLoginModal(false)

    return (
        <Modal
            modalHeader="Log In"
            modalContent={
                <LoginForm
                    setShowPasswordResetModal={setShowPasswordResetModal}
                    onClose={handleClose}
                />
            }
            onClose={handleClose}
        />
    )
}
