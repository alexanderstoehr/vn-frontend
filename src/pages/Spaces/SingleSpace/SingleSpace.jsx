import {Checkbox, Label, Sidebar} from "flowbite-react";
import {HiOutlineFolder, HiOutlineTag, HiOutlineBookmark, HiOutlineCalendar} from "react-icons/hi";
import singleSpace from "../../../data/dummyData/singleSpace.json";
import spaceTax from "../../../data/dummyData/allSpaceTax.json";
import {useState} from "react";
import Tag from "../../../components/primitives/Tag.jsx";
import SpacesSidebar from "../SpacesSidebar.jsx";

export default function SingleSpace() {


	return (
		<div className="flex flex-row mx-auto max-w-screen-xl gap-8 pt-8">
			<SpacesSidebar/>
			<div className="flex flex-col w-full  gap-8 pt-2">
				<div className="max-w-xl ">
					<div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{singleSpace.name}</div>
					<div className="text-lg font-normal text-gray-500 dark:text-gray-400">{singleSpace.description}</div>
				</div>
				{singleSpace.videos.map((video, index) => (
					<div key={index}
						 className="flex gap-8 border border-gray-300 rounded-md p-8 cursor-pointer hover:scale-[1.01] hover:ease-in-out transition-transform duration-300 bg-gray-100">
						<img src={video.thumbnail} className="w-96 h-56 object-cover rounded-xl"/>
						<div>
							<div>
								<div className="mb-2">
									{video.tags.map((tag, index) => (
										<Tag key={index} text={tag.name} close=""/>
									))}
								</div>
								<div className="flex flex-row gap-4">
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
							</div>
							<div className="text-lg font-semibold leading-tight text-gray-900 dark:text-white mb-2">{video.title}</div>
							<p className="font-normal text-gray-500 dark:text-gray-400">{video.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}