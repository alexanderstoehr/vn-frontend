import {useEffect, useRef, useState} from "react";
import SpaceListingSingleVideo from "./SpaceListingSingleVideo.jsx";
import Button from "../../../components/primitives/Button.jsx";
import {HiArrowRight, HiPlay} from "react-icons/hi";
import classNames from "classnames";

export default function SpaceListingSingle({space}) {
	const [scrollStatus, setScrollStatus] = useState("right");
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const scrollContainerRef = useRef(null);

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

		const handleMouseDown = (e) => {
			setIsDragging(true);
			setStartX(e.pageX - scrollContainer.offsetLeft);
			setScrollLeft(scrollContainer.scrollLeft);
			scrollContainer.style.userSelect = "none"; // Disable text selection
		};

		const handleMouseMove = (e) => {
			if (!isDragging) return;
			e.preventDefault();
			const x = e.pageX - scrollContainer.offsetLeft;
			const walk = (x - startX) * 2; // Adjust the scroll speed
			scrollContainer.scrollLeft = scrollLeft - walk;
		};

		const handleMouseUp = () => {
			setIsDragging(false);
			scrollContainer.style.userSelect = ""; // Re-enable text selection
		};

		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", handleScroll);
			scrollContainer.addEventListener("mousedown", handleMouseDown);
			scrollContainer.addEventListener("mousemove", handleMouseMove);
			scrollContainer.addEventListener("mouseup", handleMouseUp);
			scrollContainer.addEventListener("mouseleave", handleMouseUp);
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener("scroll", handleScroll);
				scrollContainer.removeEventListener("mousedown", handleMouseDown);
				scrollContainer.removeEventListener("mousemove", handleMouseMove);
				scrollContainer.removeEventListener("mouseup", handleMouseUp);
				scrollContainer.removeEventListener("mouseleave", handleMouseUp);
			}
		};
	}, [isDragging, startX, scrollLeft]);

	return (
		<div className="flex flex-col mx-auto max-w-screen-xl gap-2 pt-8 z-10">
			<div className="flex justify-between">
				<div className="flex flex-col w-1/2 mb-2">
					<div className="text-gray-800 text-2xl font-semibold">{space.name}</div>
					<div className="text-gray-500">{space.description}</div>
					<div className="flex items-center gap-1 text-gray-500">{<HiPlay/>} {space.videos.length} Videos</div>
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
					className="flex p-4 gap-8 overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
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