import SpacesSidebar from "../SpacesSidebar.jsx"
import allSpaces from "../../../data/dummyData/allSpaces.json"
import SpaceListingSingle from "./SpaceListingSingle.jsx"
import { useUser } from "../../../context/UserContext.jsx"
import { useQuery } from "@tanstack/react-query"
import { getAllSpacesQuery } from "../../../api/queries/getAllSpacesQuery.js"
import { useEffect, useState } from "react"
import Button from "../../../components/primitives/Button.jsx"
import AddSpaceModal from "../../../components/modals/AddSpaceModal.jsx"

export default function AllSpaces() {
    const [spaces, setSpaces] = useState([])
    const [showAddSpacesModal, setShowAddSpaceModal] = useState(false)

    const { data, isSuccess, isError, error } = useQuery({
        queryKey: ["allSpaces"],
        queryFn: getAllSpacesQuery,
    })
    if (isSuccess) {
        console.log("Query was successful:", data)
    }

    // Handling error
    if (isError) {
        console.error("An error occurred:", error)
    }

    useEffect(() => {
        if (isSuccess) {
            console.log("Query was successful:", data)
            setSpaces(data)
        }
    }, [isSuccess, data])
    //const { user } = useUser()
    //console.log("User in spaces:", user)

    const handleCreateSpace = () => {
        console.log("create space pls")
        setShowAddSpaceModal(!showAddSpacesModal)
    }

    return (
        <>
            {showAddSpacesModal && (
                <AddSpaceModal setShowAddSpaceModal={setShowAddSpaceModal} />
            )}
            <div className="mx-auto flex max-w-screen-xl flex-row gap-8 pt-8">
                <SpacesSidebar />
                <div className="flex w-3/4 flex-col gap-8 pt-2">
                    <div className="">
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    All Spaces
                                </div>
                                <div className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                    All your nice learning spaces in one place.
                                    Keep it up!
                                </div>
                            </div>
                            <Button
                                type="primary"
                                text="Create New Space"
                                onClick={handleCreateSpace}
                            />
                        </div>
                        <div className="px-2">
                            {spaces.map((space, index) => (
                                <div key={index}>
                                    <SpaceListingSingle space={space} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
