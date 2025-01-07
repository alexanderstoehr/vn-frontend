import Modal from "./Modal.jsx"
import modalContent from "/src/data/content/versionInfo.json"

export default function VersionInfoModal({ setShowVersionInfoModal }) {
    const handleClose = () => setShowVersionInfoModal(false)

    return (
        <Modal
            modalHeader={modalContent.modalTitle}
            modalContent="Currently in alpha, we still need to do a lot of stuff."
            onClose={handleClose}></Modal>
    )
}
