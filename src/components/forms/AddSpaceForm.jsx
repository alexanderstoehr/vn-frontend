import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import InputTextArea from "../primitives/InputTextArea.jsx"
import { useState } from "react"
import { useAddSpaceMutation } from "../../hooks/useAddSpaceMutation.jsx"
import { useQueryClient } from "@tanstack/react-query"

export default function AddSpaceForm({ onClose }) {
    const addSpace = useAddSpaceMutation()
    const queryClient = useQueryClient()

    const [spaceName, setSpaceName] = useState()
    const [spaceDescription, setSpaceDescription] = useState()

    console.log("name: ", spaceName, "description", spaceDescription)

    const handleSubmit = (e) => {
        e.preventDefault()
        addSpace.mutate(
            {
                space_name: spaceName,
                space_description: spaceDescription,
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries("allSpaces")
                    onClose()
                },
            }
        )

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
                    onChange={(e) => setSpaceName(e.target.value)}
                    autoFocus
                />
                <InputTextArea
                    placeholder="Describe the content of this space, what it's about, and what you can find here."
                    type="text"
                    onChange={(e) => setSpaceDescription(e.target.value)}
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
