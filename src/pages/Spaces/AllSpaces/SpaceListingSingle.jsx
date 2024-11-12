import SpaceListingSingleVideo from "./SpaceListingSingleVideo.jsx";
import allSpaceTax from "../../../data/dummyData/allSpaceTax.json";
import Tag from "../../../components/primitives/Tag.jsx";

export default function SpaceListingSingle({space}) {

	console.log(allSpaceTax.tags)

	return (
		<div className="flex flex-col mx-auto max-w-screen-xl gap-2 pt-8">
			<div className="flex">
				<div className="flex flex-col w-1/2">
					<div className="text-gray-900 text-xl font-semibold">{space.name}</div>
					<div className="text-gray-500">{space.description}</div>
				</div>
				<div className="flex">
					{allSpaceTax.tags.map((tag, index) => (
						<div key={index}>
							<Tag text={tag.name} close=""/>
						</div>
					))}
				</div>
				<a href="#"
				   className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-primary-400  hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
					<svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
						 xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
					</svg>
					Button
				</a>
			</div>
			<div className="flex gap-8 overflow-x-scroll no-scrollbar">
				{space.videos.map((video, index) => (
					<SpaceListingSingleVideo key={index} video={video}/>
				))}
			</div>
		</div>
	)
}