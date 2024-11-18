import {HiX} from "react-icons/hi";
import Button from "./primitives/Button.jsx";

export default function Modal({
								  modalHeader = "ModalHead",
								  modalContent = "ModalContent",
								  primaryButtonText = "Save",
								  secondaryButtonText = "Cancel"
							  }) {
	return (

		<div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white rounded-lg p-4 w-96">
				<div className="flex justify-between items-center">
					<div className="text-xl font-semibold">{modalHeader}</div>
					<div className="cursor-pointer">
						<HiX className="w-6 h-6"/>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="text-gray-500">{modalContent}</div>

					<div className="flex justify-end items-center gap-2">
						<Button type="" text={secondaryButtonText}/>
						<Button type="primary" text={primaryButtonText}/>
					</div>

				</div>
			</div>
		</div>
	)
}