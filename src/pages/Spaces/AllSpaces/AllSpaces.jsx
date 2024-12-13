import SpacesSidebar from "../SpacesSidebar.jsx"
import allSpaces from "../../../data/dummyData/allSpaces.json"
import SpaceListingSingle from "./SpaceListingSingle.jsx"
import { useUser } from "../../../context/UserContext.jsx"

export default function AllSpaces() {
    const { user } = useUser()
    console.log("User in spaces:", user)

    return (
        <div className="mx-auto flex max-w-screen-xl flex-row gap-8 pt-8">
            <SpacesSidebar />
            <div className="flex w-3/4 flex-col gap-8 pt-2">
                <div className="">
                    <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        All Spaces
                    </div>
                    <div className="text-lg font-normal text-gray-500 dark:text-gray-400">
                        All your nice learning spaces in one place. Keep it up!
                    </div>
                    <div className="px-2">
                        {allSpaces.spaces.map((space, index) => (
                            <div key={index}>
                                <SpaceListingSingle space={space} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
