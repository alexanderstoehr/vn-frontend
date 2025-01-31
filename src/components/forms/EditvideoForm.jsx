import InputTextLine from "../primitives/InputTextLine.jsx"
import Button from "../primitives/Button.jsx"
import { useEffect, useState, useRef } from "react"
import { useEditVideoMutation } from "../../hooks/useEditVideoMutation.jsx"

export default function EditvideoForm({ onClose, currentVideo }) {
    const editVideo = useEditVideoMutation()
    const [videoTitle, setVideoTitle] = useState(currentVideo.video_title)
    const [videoDescription, setVideoDesciption] = useState(
        currentVideo.video_description
    )
    //useRef to store the current value of the note title in the --> current render
    //useRef keeps the value of the note title in sync with the input field without causing a re-render
    //this fixes the not updating state if the user types fast and sends with enter key
    const videoTitleRef = useRef(videoTitle)
    const videoDescriptionRef = useRef(videoDescription)

    const notePayload = {
        id: currentVideo.id,
        video_title: videoTitle,
        video_description: videoDescription,
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editVideo.mutate(
            {
                ...notePayload,
                video_title: videoTitleRef.current,
                video_description: videoDescriptionRef.current,
            },
            {
                onSuccess: () => {
                    onClose()
                },
            }
        )
        console.log("submitted: ", videoTitleRef.current)
        onClose()
    }

    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                handleSubmit(e)
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    //Update the ref value when the note title changes
    useEffect(() => {
        videoTitleRef.current = videoTitle
        videoDescriptionRef.current = videoDescription

        console.log("videoTitleRef.current: ", videoTitleRef.current)
        console.log(
            "videoDescriptionRef.current: ",
            videoDescriptionRef.current
        )
    }, [videoTitle, videoDescription])

    return (
        <div>
            <div className="px2 pb-4 pt-2 text-sm"></div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4">
                <InputTextLine
                    placeholder="Video title"
                    type="text"
                    onChange={(e) => setVideoTitle(e.target.value)}
                    autoFocus
                    value={videoTitle}
                />
                <InputTextLine
                    placeholder="Video description"
                    type="text"
                    onChange={(e) => setVideoDesciption(e.target.value)}
                    value={videoDescription}
                />
                <div className="flex items-center justify-end">
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <Button
                        type="primary"
                        text="Save Note"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </div>
    )
}
