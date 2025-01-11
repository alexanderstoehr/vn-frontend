import Modal from "./Modal.jsx"
import ResetPasswordForm from "../forms/ResetPasswordForm.jsx"

export default function ResetPasswordModal({ setShowPasswordResetModal }) {
    return (
        <>
            <Modal
                modalHeader="Reset Password"
                modalContent={
                    <ResetPasswordForm
                        onClose={() => setShowPasswordResetModal(false)}
                    />
                }
                onClose={() => setShowPasswordResetModal(false)}
            />
        </>
    )
}
