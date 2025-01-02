import { HiX } from "react-icons/hi"
import { useParams } from "react-router-dom"
import { useRemoveTagMutation } from "../../hooks/useRemoveTagMutation.jsx"

export default function Tag({ close, text, tag }) {
    const { videoId } = useParams()

    const removeTag = useRemoveTagMutation()

    const handleTagDelete = () => {
        console.log("delete tag:", tag)
        const tagData = {
            tag_name: tag.tag_name,
        }
        removeTag.mutate({ tagData, videoId })
    }

    return (
        <div className="mb-2 mr-2 inline-flex cursor-pointer flex-row items-center gap-2 rounded bg-indigo-100 px-2 text-indigo-800">
            <span>{text}</span>
            {close && (
                <HiX
                    className="-mb-[1px] cursor-pointer"
                    onClick={handleTagDelete}
                />
            )}
        </div>
    )
}
