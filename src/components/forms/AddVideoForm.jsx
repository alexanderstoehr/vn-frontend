import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import InputTextArea from "../primitives/InputTextArea.jsx"
import { useEffect, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useAddVideoMutation } from "../../hooks/useAddVideoMutation.jsx"
import { useParams } from "react-router-dom"
import InputSelect from "../primitives/InputSelect.jsx"
import {
    getYoutubeIdFromUrl,
    getYouTubeThumbnailFromUrl,
} from "../../utils/helpers.js"
import { useGetAllCategories } from "../../hooks/useGetAllCategories.jsx"

export default function AddVideoForm({ onClose }) {
    const addVideo = useAddVideoMutation()
    const queryClient = useQueryClient()
    const { spaceId } = useParams()

    // const [space, setSpace] = useState()
    const [videoTitle, setVideoTitle] = useState()
    const [videoDescription, setVideoDescription] = useState()
    const [videoHostUrl, setVideoHostUrl] = useState()
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [videoHostId, setVideoHostId] = useState()
    const [videoHostThumbnailUrl, setVideoHostThumbnailUrl] = useState()

    const [categoryOptions, setCategoryOptions] = useState()
    let catObj

    const { data } = useGetAllCategories()

    useEffect(() => {
        {
            data
                ? (catObj = data.map((category) => ({
                      id: category.id,
                      label: category.category_name,
                      value: category.id,
                      key: category.id,
                  })))
                : null
        }
        setCategoryOptions(catObj)
        console.log("data: ", data)
        console.log("lots of cats: ", categoryOptions)
    }, [data])

    useEffect(() => {
        if (videoHostUrl) {
            setVideoHostId(getYoutubeIdFromUrl(videoHostUrl))
            setVideoHostThumbnailUrl(getYouTubeThumbnailFromUrl(videoHostUrl))
        }
    }, [videoHostUrl])

    const handleSubmit = (e) => {
        e.preventDefault()
        addVideo.mutate(
            {
                space: spaceId,
                video_title: videoTitle,
                video_description: videoDescription,
                video_host_url: videoHostUrl,
                video_host_id: videoHostId,
                video_host_thumbnail_url: videoHostThumbnailUrl,
                category: selectedCategory,
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries("singleSpace")
                    onClose()
                },
            }
        )

        console.log("submitted")
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div>
            <div className="px2 pb-4 pt-2 text-sm">Add your video.</div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4">
                <InputTextLine
                    placeholder="Video Title"
                    type="text"
                    onChange={(e) => setVideoTitle(e.target.value)}
                    autoFocus
                />
                <InputSelect
                    selectText={
                        categoryOptions
                            ? categoryOptions[selectedCategory].label
                            : "Choose a category"
                    }
                    options={categoryOptions ? categoryOptions : []}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                />
                <InputTextLine
                    placeholder="Video Url from Youtube"
                    type="text"
                    onChange={(e) => setVideoHostUrl(e.target.value)}
                />
                <InputTextArea
                    placeholder="Describe the content of the video."
                    type="text"
                    onChange={(e) => setVideoDescription(e.target.value)}
                    rows="4"
                />
                <div className="flex items-center justify-end">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="primary"
                        text="Add Video"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
