import { HiOutlinePlay, HiPencil, HiPlay, HiTrash } from "react-icons/hi"
import classNames from "classnames"

export default function Note({
    note,
    active,
    time,
    isFirst,
    isLast,
    onClick,
    setShowEditNoteModal,
    setShowDeleteNoteModal,
}) {
    const handleEditClick = () => {
        console.log("Edit Note Click")
        setShowEditNoteModal(true)
    }

    const handleDeleteClick = () => {
        console.log("Delete Note Click")
        setShowDeleteNoteModal(true)
    }
    return (
        <div
            className={classNames(
                "group cursor-pointer border border-b-gray-300 p-2 hover:bg-primary-200",
                {
                    "rounded-t-xl": isFirst,
                    "rounded-b-xl": isLast,
                }
            )}
            onClick={() => onClick(note)}>
            <div className="flex items-center justify-between">
                <div
                    className={classNames("flex items-center gap-2", {
                        "font-bold": active,
                    })}>
                    {active ? (
                        <HiPlay className="text-primary-800" />
                    ) : (
                        <HiOutlinePlay />
                    )}
                    {note.note_title}
                </div>
                <div className="flex">
                    <span className="text-sm text-gray-500 group-hover:hidden">
                        ({time})
                    </span>
                    <span className="hidden flex-row group-hover:block">
                        <div className="mr-2 flex gap-4">
                            <HiPencil
                                className="hover:scale-125"
                                onClick={handleEditClick}
                            />
                            <HiTrash
                                className="text-red-700 hover:scale-125"
                                onClick={handleDeleteClick}
                            />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}
