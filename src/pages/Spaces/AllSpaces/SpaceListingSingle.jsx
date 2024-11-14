import {useEffect, useRef, useState} from "react";
import SpaceListingSingleVideo from "./SpaceListingSingleVideo.jsx";
import Button from "../../../components/primitives/Button.jsx";
import {HiArrowRight} from "react-icons/hi";
import classNames from "classnames";

export default function SpaceListingSingle({space}) {
	const [scrollStatus, setScrollStatus] = useState("right");
	let scrollContainerRef = useRef(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		const maxScrollableWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

		const handleScroll = () => {
			if (scrollContainer.scrollLeft > 0 && scrollContainer.scrollLeft < (maxScrollableWidth - 10)) {
				setScrollStatus("both");
			} else if (scrollContainer.scrollLeft === 0) {
				setScrollStatus("right");
			} else if (scrollContainer.scrollLeft >= (maxScrollableWidth - 10)) {
				setScrollStatus("left");
			}
		};

		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return (
		<div className="flex flex-col mx-auto max-w-screen-xl gap-2 pt-8 z-10">
			<div className="flex justify-between">
				<div className="flex flex-col w-1/2 mb-2">
					<div className="text-gray-800 text-2xl font-semibold">{space.name}</div>
					<div className="text-gray-500">{space.description}</div>
				</div>

				<Button
					className="ml-auto"
					type="secondary"
					text="View Space"
					iconEnd={<HiArrowRight/>}
				/>
			</div>
			<div className="relative">
				<div
					ref={scrollContainerRef}
					className="flex p-4 gap-8 overflow-x-scroll no-scrollbar"
				>
					{space.videos.map((video, index) => (
						<SpaceListingSingleVideo key={index} video={video}/>
					))}
				</div>
				<div
					className={classNames(
						"absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10",
						{hidden: scrollStatus !== "left" && scrollStatus !== "both"}
					)}
				/>
				<div
					className={classNames(
						"absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10",
						{hidden: scrollStatus !== "right" && scrollStatus !== "both"}
					)}
				/>
			</div>
			<div className="border border-b-1 border-gray-300 mt-8 mb-4"></div>
		</div>
	);
}