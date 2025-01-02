import {
    HiOutlineBookmark,
    HiOutlineCalendar,
    HiOutlineFolder,
    HiOutlineLightBulb,
    HiOutlineTag,
} from "react-icons/hi"
import Button from "../../components/primitives/Button.jsx"
import { formatDate } from "../../utils/formatting.js"

export default function VideoHeader({ video }) {
    return (
        <div>
            <div className="flex justify-between text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-400">
                <div className="">
                    <div className="">{video.video_title}</div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                            <HiOutlineCalendar className="h-4 w-4 text-gray-500" />
                            {formatDate(video.created_at)}
                        </div>
                        <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <HiOutlineBookmark className="h-4 w-4 text-gray-500" />
                            {video.notes_count} Notes
                        </div>
                        <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <HiOutlineFolder className="h-4 w-4 text-gray-500" />
                            {video.category.category_name}
                        </div>
                        <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <HiOutlineTag className="h-4 w-4 text-gray-500" />
                            {video.tags.map((tag, index) => (
                                <span key={tag.id}>
                                    {tag.tag_name}
                                    {index < video.tags.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <Button
                        iconStart={<HiOutlineLightBulb />}
                        text="Shortkeys"
                        type="secondary"
                    />
                </div>
            </div>
        </div>
    )
}
