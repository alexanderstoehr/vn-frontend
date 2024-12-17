import { HiX } from "react-icons/hi"
import { useEffect } from "react"

export default function Modal({
    modalHeader = "ModalHead",
    modalContent = "ModalContent",
    onClose,
}) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose()
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [onClose])

    return (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-gray-950 bg-opacity-85 pt-20">
            <div className="z-50 w-96 rounded-lg bg-white p-4">
                <div className="mb-2 flex items-center justify-between border-b border-b-gray-300 pb-2">
                    <div className="text-xl font-semibold">{modalHeader}</div>
                    <div
                        className="cursor-pointer"
                        onClick={onClose}>
                        <HiX className="h-6 w-6" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="text-gray-500">{modalContent}</div>
                </div>
            </div>
        </div>
    )
}
