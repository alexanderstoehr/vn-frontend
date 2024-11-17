export default function HelpLabel({text}) {
	return (
		<div className="flex flex-row items-center gap-2 text-xs text-gray-500 dark:text-gray-400 ml-4">
			{/* <HiOutlineQuestionMarkCircle className="w-4 h-4"/> */}
			{text}
		</div>
	)
}