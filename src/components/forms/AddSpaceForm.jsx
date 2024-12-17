import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import InputTextArea from "../primitives/InputTextArea.jsx"

export default function AddSpaceForm({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Add your logic here
        onClose()
        console.log("submitted")
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div>
            <div className="px2 pb-4 pt-2 text-sm">Add your space man!</div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4">
                <InputTextLine
                    placeholder="Space Name"
                    type="text"
                />
                <InputTextArea
                    placeholder="Space Name"
                    type="text"
                    rows="4"
                />
                <div className="flex items-center justify-end">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="primary"
                        text="Add Space"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
