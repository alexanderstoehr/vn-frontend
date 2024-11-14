import {HiX} from "react-icons/hi";

// eslint-disable-next-line react/prop-types
export default function Tag({close, text}) {
	return (
		<div className="inline-flex flex-row items-center  bg-indigo-100 px-2 text-indigo-800 rounded gap-2 mr-2 mb-2 cursor-pointer">
			<span>{text}</span>
			{close && <HiX className=" cursor-pointer -mb-[1px]"/>}
		</div>
	);
}