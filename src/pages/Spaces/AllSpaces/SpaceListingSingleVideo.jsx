import { HiOutlineBookmark, HiOutlineCalendar } from "react-icons/hi"
import allSpaceTax from "../../../data/dummyData/allSpaceTax.json"
import Tag from "../../../components/primitives/Tag.jsx"
import { formatDate } from "../../../utils/formatting.js"
import { useNavigate } from "react-router-dom"

export default function SpaceListingSingleVideo({ video }) {
    const navigate = useNavigate()

    const handleVideoClick = () => {
        navigate(`/video/${video.id}`)
    }

    return (
        <div
            onClick={handleVideoClick}
            className="z-10 min-w-80 max-w-60 cursor-pointer rounded-xl border-2 p-6 duration-200 ease-in-out hover:scale-[1.01]">
            <img
                className="mb-4 h-40 w-64 rounded-l bg-gray-300 object-cover"
                src={video.video_host_thumbnail_url}></img>
            <div className="mb-2 flex flex-row gap-4">
                <div className="flex flex-row items-center gap-1 text-xs font-semibold text-gray-700 dark:text-gray-400">
                    <HiOutlineCalendar className="h-4 w-4 text-primary-800" />
                    {formatDate(video.created_at)}
                </div>
                <div className="flex flex-row items-center gap-1 text-sm text-gray-700 dark:text-gray-400">
                    <HiOutlineBookmark className="h-4 w-4 text-primary-800" />
                    {video.notes_count} Notes
                </div>
            </div>
            <div className="mb-2 text-lg font-semibold leading-tight">
                {video.video_title}
            </div>
            <div className="flex flex-wrap">
                {video.tags.map((tag, index) => (
                    <div key={index}>
                        <Tag
                            text={tag.tag_name}
                            close=""
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
