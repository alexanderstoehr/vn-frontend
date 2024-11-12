import {HiOutlineBookmark, HiOutlineCalendar} from "react-icons/hi";

export default function SpaceListingSingleVideo({video}) {
	return (
		<div className="min-w-80">
			<img className="mb-2" src={video.thumbnail}></img>
			<div className="flex flex-row gap-4 mb-2">
				<div
					className="flex flex-row items-center text-xs font-semibold text-gray-700 dark:text-gray-400 gap-1">
					<HiOutlineCalendar className=" text-primary-800 w-4 h-4"/>
					{video.created}
				</div>
				<div className="flex flex-row items-center text-sm text-gray-700 dark:text-gray-400 gap-1">
					<HiOutlineBookmark className="text-primary-800 w-4 h-4"/>
					{video.notes.length} Notes
				</div>
			</div>
			{video.title}
			<div className="flex">
			</div>
		</div>
	)
}