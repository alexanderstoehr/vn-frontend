import video from '../../data/dummyData/demoVideo.json';
import {
	HiArrowRight,
	HiOutlineBookmark,
	HiOutlineCalendar,
	HiOutlineFolder,
	HiOutlineLightBulb,
	HiOutlineTag,
	HiPlus
} from "react-icons/hi";
import Button from "../../components/primitives/Button.jsx";
import HelpLabel from "../../components/primitives/HelpLabel.jsx";
import InputTextLine from "../../components/primitives/InputTextLine.jsx";
import InputSelect from "../../components/primitives/InputSelect.jsx";
import videoCategories from "../../data/dummyData/videoCategories.json";
import Tag from "../../components/primitives/Tag.jsx";


export default function Video() {

	console.log(video)

	return (
		<div>
			<div className="flex flex-col mx-auto max-w-screen-xl gap-4 pt-8">
				<div className="flex justify-between text-2xl leading-tight font-semibold text-gray-900 dark:text-gray-400 ">
					<div className="">
						<div className="">{video.title}</div>
						<div className="flex flex-row gap-4">
							<div
								className="flex flex-row items-center text-xs font-semibold text-gray-500 dark:text-gray-400 gap-1">
								<HiOutlineCalendar className=" text-gray-500 w-4 h-4"/>
								{video.created}
							</div>
							<div className="flex flex-row items-center text-sm text-gray-500 dark:text-gray-400 gap-1">
								<HiOutlineBookmark className="text-gray-500 w-4 h-4"/>
								{video.notes.length} Notes
							</div>
							<div className="flex flex-row items-center text-sm text-gray-500 dark:text-gray-400 gap-1">
								<HiOutlineFolder className="text-gray-500 w-4 h-4"/>
								{video.category}
							</div>
							<div className="flex flex-row items-center text-sm text-gray-500 dark:text-gray-400 gap-1">
								<HiOutlineTag className="text-gray-500 w-4 h-4"/>
								{video.tags.map(tag => tag.name).join(', ')}
							</div>
						</div>
					</div>
					<div className="">
						<Button
							iconStart={<HiOutlineLightBulb/>}
							text="Shortkeys"
							type="secondary"/>
					</div>
				</div>
				<div className="flex gap-8">
					<div className="flex flex-col gap-8 w-2/3">
						<div className="w-full pb-[56.25%] relative h-0">
							<iframe
								src="https://www.youtube.com/embed/SqcY0GlETPk?si=IoUeiCrkUBvlnYXI?rel=0&modestbranding=1&showinfo=0&controls=1"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="absolute top-0 left-0 w-full h-full"
							>
							</iframe>
						</div>
						<div>
							<div className="">Description Header</div>
							<div className="">Description Area</div>
						</div>
					</div>
					<div className="flex flex-col gap-8 w-1/3">
						<div>
							<div className="flex items-center">
								<Button
									iconStart={<HiPlus/>}
									text="Add Note"
									type="primary"
									className="mt-2"
								/>
								<HelpLabel text="Add a note at the current time"/>

							</div>
							<div className=""></div>
						</div>
						<div>
							<div className="flex flex-col gap-8">
								<div className="flex flex-col">
									<div className="flex">
										<div className="text-lg font-semibold">Video Tags</div>
										<HelpLabel text="Add up to 3 tags to help categorize your videos"/>
									</div>
									<InputTextLine
										value=""
										placeholder="Add Tag"
									/>
									<div className="flex flex-wrap mt-4"> {video.tags.map(tag => (
										<Tag text={tag.name} key={tag.id}/>
									))}
									</div>
								</div>
								<div className="flex flex-col">
									<div className="flex">
										<div className="text-lg font-semibold">Video Category</div>
										<HelpLabel text="Add a category to help categorize your videos"/>
									</div>
									<InputSelect
										options={videoCategories.categories}
										selectText="Select a Category"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}