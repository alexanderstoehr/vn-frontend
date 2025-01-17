import { HiOutlineBookmark, HiOutlineCalendar } from "react-icons/hi"
import Tag from "../../../components/primitives/Tag.jsx"
import SpacesSidebar from "../SpacesSidebar.jsx"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getSingleSpaceQuery } from "../../../api/queries/getSingleSpaceQuery.js"
import Button from "../../../components/primitives/Button.jsx"
import DeleteSpaceModal from "../../../components/modals/DeleteSpaceModal.jsx"
import { formatDate } from "../../../utils/formatting.js"
import AddVideoModal from "../../../components/modals/AddVideoModal.jsx"

export default function SingleSpace() {
    const { spaceId } = useParams()
    const navigate = useNavigate()

    const [space, setSpace] = useState()
    const [videos, setVideos] = useState()
    const [filteredVideos, setFilteredVideos] = useState([])

    const [showDeleteSpaceModal, setShowDeleteSpaceModal] = useState(false)
    const [showAddVideoModal, setShowAddVideoModal] = useState(false)

    const [filterObject, setFilterObject] = useState({})

    const { data, isSuccess, isLoading, isError, error } = useQuery({
        queryKey: ["singleSpace", spaceId],
        queryFn: () => getSingleSpaceQuery(spaceId),
    })

    useEffect(() => {
        if (isSuccess) {
            // console.log("Query was successful UE:", data)
            setSpace(data)
            setVideos(data.videos)
            setFilteredVideos(data.videos)
            // console.log("space", space)
        }
    }, [isSuccess, data])

    const isFilterObjectEmpty = (filterObj) => {
        return (
            !filterObj || // Undefined or null
            (Object.keys(filterObj.categories || {}).length === 0 &&
                Object.keys(filterObj.tags || {}).length === 0)
        )
    }

    const filterVideos = isFilterObjectEmpty(filterObject)
        ? videos // If filterObject is empty or undefined, return all videos
        : videos.filter((video) => {
              // Check category match
              const isCategoryMatch =
                  filterObject.categories?.[video.category.id]

              // Check tags match
              const isTagMatch = video.tags.some(
                  (tag) => filterObject.tags?.[tag.id]
              )

              // Return true if either category or tags match
              return isCategoryMatch || isTagMatch
          })

    useEffect(() => {
        console.log("Filterobject: ", filterObject)
        console.log("Videos: ", videos)
        console.log("filter empty?: ", isFilterObjectEmpty(filterObject))
        console.log("filtered videos: ", filterVideos)
        setFilteredVideos(filterVideos)
    }, [filterObject, space, videos])

    // ------ First version of filtering
    // useEffect(() => {
    //     if (space && filterObject) {
    //         const selectedCategoryIds = Object.keys(
    //             filterObject.categories || {}
    //         ).filter((key) => filterObject.categories[key])
    //
    //         const filtered = videos.filter((video) =>
    //             selectedCategoryIds.includes(video.category.id.toString())
    //         )
    //
    //         setFilteredVideos(filtered.length > 0 ? filtered : videos)
    //     }
    // }, [filterObject, space, videos])

    if (isSuccess) {
        // console.log("Query was successful:", data)
    }
    if (isLoading) {
        return <div>Loading...</div> // Show loading indicator
    }

    // Handling error
    if (isError) {
        console.error("An error occurred while fetching Spaces: ", error)
    }

    if (!space || !space.videos) {
        return <div>No space data available</div>
    }

    // console.log("User in spaces:", user)
    // console.log("in SingleSpace: ", spaceId)

    const handleDeleteSpace = () => {
        console.log("Pls delete this Space")
        setShowDeleteSpaceModal(!showDeleteSpaceModal)
    }
    const handleAddVideo = () => {
        console.log("Add a Video")
        setShowAddVideoModal(!showAddVideoModal)
    }

    const handleVideoClick = (videoId) => {
        navigate(`/video/${videoId}`)
    }

    return (
        <>
            {showAddVideoModal && (
                <AddVideoModal setShowAddVideoModal={setShowAddVideoModal} />
            )}
            {showDeleteSpaceModal && (
                <DeleteSpaceModal
                    setShowDeleteSpaceModal={setShowDeleteSpaceModal}
                />
            )}
            <div className="mx-auto flex max-w-screen-xl flex-row gap-8 pt-8">
                <SpacesSidebar setFilterObject={setFilterObject} />
                <div className="flex w-full flex-col gap-8 pt-2">
                    <div className="">
                        <div className="flex justify-between">
                            <div className="max-w-xl">
                                <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {space.space_name}
                                </div>
                                <div className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                    {space.space_description}
                                </div>
                            </div>
                            <Button
                                type="primary"
                                text="Add Video"
                                onClick={handleAddVideo}
                            />
                        </div>
                    </div>
                    {filteredVideos.map((video, index) => (
                        <div
                            key={index}
                            onClick={() => handleVideoClick(video.id)}
                            className="flex cursor-pointer gap-8 rounded-md border border-gray-300 bg-gray-100 p-8 transition-transform duration-300 hover:scale-[1.01] hover:ease-in-out">
                            <div className="h-44 min-w-72 rounded-xl object-cover">
                                <img
                                    src={video.video_host_thumbnail_url}
                                    className="h-full w-full rounded-xl object-cover"
                                />
                            </div>

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
                                            {formatDate(video.created_at)}
                                        </div>
                                        <div className="flex flex-row items-center gap-1 text-sm text-gray-700 dark:text-gray-400">
                                            <HiOutlineBookmark className="h-4 w-4 text-primary-800" />
                                            {video.notes_count} Notes
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2 text-lg font-semibold leading-tight text-gray-900 dark:text-white">
                                    {video.video_title}
                                </div>
                                <p className="font-normal text-gray-500 dark:text-gray-400">
                                    {video.video_description}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4 flex justify-end">
                        <Button
                            type="danger-secondary"
                            text="Delete Space"
                            onClick={handleDeleteSpace}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
