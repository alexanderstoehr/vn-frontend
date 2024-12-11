import Modal from "./Modal.jsx"
import RegistrationForm from "../forms/RegistrationForm.jsx"

export default function RegisterModal({ setShowRegisterModal }) {
    const handleClose = () => setShowRegisterModal(false)

    return (
        <Modal
            modalHeader="Register"
            modalContent={<RegistrationForm onClose={handleClose} />}
            onClose={() => setShowRegisterModal(false)}
        />
    )
}
