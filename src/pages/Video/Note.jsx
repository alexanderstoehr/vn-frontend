import {HiOutlinePlay, HiPencil, HiPlay} from "react-icons/hi";
import classNames from "classnames";

export default function Note({note, active, time}) {
	return (
		<div className="p-2 border border-b-gray-300 rounded-xl hover:bg-primary-200 group">
			<div className="flex justify-between items-center">
				<div className={classNames("flex items-center gap-2", {"font-bold": active})}>
					{active ? <HiPlay/> : <HiOutlinePlay/>} {note}
				</div>
				<div className="flex">
					<span className="text-sm text-gray-500 group-hover:hidden"> ({time})</span>
					<span className="hidden group-hover:block"> <HiPencil/></span>
				</div>
			</div>
		</div>
	);
}