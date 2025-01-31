import Modal from "./Modal.jsx"
import EditVideoForm from "../forms/EditVideoForm.jsx"

export default function EditVideoModal({
    setShowEditVideoModal,
    currentVideo,
}) {
    return (
        <Modal
            modalHeader="Edit Video"
            modalContent={
                <EditVideoForm
                    currentVideo={currentVideo}
                    onClose={() => setShowEditVideoModal(false)}
                />
            }
            onClose={() => setShowEditVideoModal(false)}
        />
    )
}
