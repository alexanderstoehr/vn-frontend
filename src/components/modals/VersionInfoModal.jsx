import Modal from "./Modal.jsx"
import modalContent from "/src/data/content/versionInfo.json"

export default function VersionInfoModal({ setShowVersionInfoModal }) {
    const handleClose = () => setShowVersionInfoModal(false)

    const content = (
        <div className="mb-4 flex flex-col gap-2">
            <div className="mb-4 flex flex-col gap-2">
                <div className="mb-2 text-xs">{modalContent.version}</div>
                <div>{modalContent.introText}</div>
                <div>{modalContent.featuresInProgress}</div>
                <div>{modalContent.feedbackText}</div>
                <a
                    target="_blank"
                    className="mt-4 cursor-pointer font-semibold"
                    href={modalContent.gitHubDiscussions}>
                    Join GitHub Discussion
                </a>
            </div>
        </div>
    )

    return (
        <Modal
            modalHeader={modalContent.modalTitle}
            modalContent={content}
            onClose={handleClose}></Modal>
    )
}
