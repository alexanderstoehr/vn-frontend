import {HiOutlinePlay, HiPencil, HiPlay} from "react-icons/hi";
import classNames from "classnames";

export default function Note({note, active, time, isFirst, isLast}) {
	return (
		<div className={classNames("p-2 border border-b-gray-300 group hover:bg-primary-200 cursor-pointer", {
			"rounded-t-xl": isFirst,
			"rounded-b-xl": isLast
		})}>
			<div className="flex justify-between items-center">
				<div className={classNames("flex items-center gap-2", {"font-bold": active})}>
					{active ? <HiPlay className="text-primary-800"/> : <HiOutlinePlay/>} {note}
				</div>
				<div className="flex">
					<span className="text-sm text-gray-500 group-hover:hidden"> ({time})</span>
					<span className="hidden group-hover:block"> <HiPencil/></span>
				</div>
			</div>
		</div>
	);
}