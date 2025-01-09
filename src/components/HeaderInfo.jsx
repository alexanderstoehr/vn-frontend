import { useState } from "react"
import VersionInfoModal from "./modals/VersionInfoModal.jsx"

export default function HeaderInfo() {
    const [showVersionInfoModal, setShowVersionInfoModal] = useState(false)

    return (
        <div>
            {showVersionInfoModal && (
                <VersionInfoModal
                    setShowVersionInfoModal={setShowVersionInfoModal}
                />
            )}
            <img
                src="/assets/images/alpha.png"
                alt="Veenotes Development Progress"
                onClick={() => setShowVersionInfoModal(!showVersionInfoModal)}
                className="cursor-pointer"
            />
        </div>
    )
}
