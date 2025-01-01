import { HiX } from "react-icons/hi"

// eslint-disable-next-line react/prop-types
export default function Tag({ close, text, tag }) {
    const handleTagDelete = () => {
        console.log("delete tag:", tag)
    }
    //Todo: Add tag delete mutation

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
