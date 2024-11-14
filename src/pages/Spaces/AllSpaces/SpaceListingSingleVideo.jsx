import {HiOutlineBookmark, HiOutlineCalendar} from "react-icons/hi";
import allSpaceTax from "../../../data/dummyData/allSpaceTax.json";
import Tag from "../../../components/primitives/Tag.jsx";

export default function SpaceListingSingleVideo({video}) {
	return (
		<div className="min-w-80 rounded-xl border-2 p-6 hover:scale-[1.01] z-10 ease-in-out duration-200 cursor-pointer">
			<img className="mb-4" src={video.thumbnail}></img>
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
			<div className="text-lg font-semibold leading-tight mb-2">
				{video.title}
			</div>
			<div className="flex flex-wrap">
				{video.tags.map((tag, index) => (
					<div key={index}>
						<Tag text={tag.name} close=""/>
					</div>
				))}
			</div>
		</div>
	)
}