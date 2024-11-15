export default function Video() {
	return (
		<div>
			<div className="flex flex-col mx-auto max-w-screen-xl gap-8 pt-8">
				<div className="text-lg font-normal text-gray-500 dark:text-gray-400 ">
					Top Row
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