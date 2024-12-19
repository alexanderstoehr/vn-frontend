import { HiOutlinePlay, HiPencil, HiPlay } from "react-icons/hi"
import classNames from "classnames"

export default function Note({ note, active, time, isFirst, isLast, onClick }) {
    return (
        <div
            className={classNames(
                "group cursor-pointer border border-b-gray-300 p-2 hover:bg-primary-200",
                {
                    "rounded-t-xl": isFirst,
                    "rounded-b-xl": isLast,
                }
            )}
            onClick={() => onClick(note.id)}>
            <div className="flex items-center justify-between">
                <div
                    className={classNames("flex items-center gap-2", {
                        "font-bold": active,
                    })}>
                    {active ? (
                        <HiPlay className="text-primary-800" />
                    ) : (
                        <HiOutlinePlay />
                    )}{" "}
                    {note.note_title}
                </div>
                <div className="flex">
                    <span className="text-sm text-gray-500 group-hover:hidden">
                        {" "}
                        ({time})
                    </span>
                    <span className="hidden group-hover:block">
                        {" "}
                        <HiPencil />
                    </span>
                </div>
            </div>
        </div>
    )
}
