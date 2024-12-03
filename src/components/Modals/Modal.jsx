import { HiX } from "react-icons/hi"
import Button from "../primitives/Button.jsx"

export default function Modal({
    modalHeader = "ModalHead",
    modalContent = "ModalContent",
    primaryButtonText = "Save",
    secondaryButtonText = "Cancel",
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-96 rounded-lg bg-white p-4">
                <div className="mb-2 flex items-center justify-between border-b border-b-gray-300 pb-2">
                    <div className="text-xl font-semibold">{modalHeader}</div>
                    <div className="cursor-pointer">
                        <HiX className="h-6 w-6" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="text-gray-500">{modalContent}</div>

                    <div className="flex items-center justify-end gap-2">
                        <Button
                            type=""
                            text={secondaryButtonText}
                        />
                        <Button
                            type="primary"
                            text={primaryButtonText}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
