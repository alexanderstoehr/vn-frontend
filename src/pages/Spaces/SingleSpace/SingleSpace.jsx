import { HiOutlineBookmark, HiOutlineCalendar } from "react-icons/hi"
import singleSpace from "../../../data/dummyData/singleSpace.json"
import Tag from "../../../components/primitives/Tag.jsx"
import SpacesSidebar from "../SpacesSidebar.jsx"
import { useUser } from "../../../context/UserContext.jsx"

export default function SingleSpace() {
    const { user } = useUser()
    console.log("User in spaces:", user)

    return (
        <div className="mx-auto flex max-w-screen-xl flex-row gap-8 pt-8">
            <SpacesSidebar />
            <div className="flex w-full flex-col gap-8 pt-2">
                <div className="max-w-xl">
                    <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {singleSpace.name}
                    </div>
                    <div className="text-lg font-normal text-gray-500 dark:text-gray-400">
                        {singleSpace.description}
                    </div>
                </div>
                {singleSpace.videos.map((video, index) => (
                    <div
                        key={index}
                        className="flex cursor-pointer gap-8 rounded-md border border-gray-300 bg-gray-100 p-8 transition-transform duration-300 hover:scale-[1.01] hover:ease-in-out">
                        <img
                            src={video.thumbnail}
                            className="h-56 w-96 rounded-xl object-cover"
                        />
                        <div>
                            <div>
                                <div className="mb-2">
                                    {video.tags.map((tag, index) => (
                                        <Tag
                                            key={index}
                                            text={tag.name}
                                            close=""
                                        />
                                    ))}
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-row items-center gap-1 text-xs font-semibold text-gray-700 dark:text-gray-400">
                                        <HiOutlineCalendar className="h-4 w-4 text-primary-800" />
                                        {video.created}
                                    </div>
                                    <div className="flex flex-row items-center gap-1 text-sm text-gray-700 dark:text-gray-400">
                                        <HiOutlineBookmark className="h-4 w-4 text-primary-800" />
                                        {video.notes.length} Notes
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                {video.title}
                            </div>
                            <p className="font-normal text-gray-500 dark:text-gray-400">
                                {video.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
