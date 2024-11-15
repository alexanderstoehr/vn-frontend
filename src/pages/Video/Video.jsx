import video from '../../data/dummyData/demoVideo.json';
import {HiOutlineBookmark, HiOutlineCalendar, HiOutlineLightBulb} from "react-icons/hi";
import Button from "../../components/primitives/Button.jsx";


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
							<div className="">Add Note</div>
							<div className="">Notes</div>
						</div>
						<div>
							<div className="">Tax Header</div>
							<div className="">
								<div className="">Tags</div>
								<div className="">Category</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}