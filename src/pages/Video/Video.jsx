import { useEffect, useRef, useState } from "react"
import Button from "../../components/primitives/Button.jsx"
import { useParams } from "react-router-dom"
import { useGetSingleVideo } from "../../hooks/useGetSingleVideo.jsx"
import DeleteVideoModal from "../../components/modals/DeleteVideoModal.jsx"
import VideoHeader from "./VideoHeader.jsx"
import NoteDescription from "./NoteDescription.jsx"
import VideoTags from "./VideoTags.jsx"
import VideoCategory from "./VideoCategory.jsx"
import NotesSection from "./NotesSection.jsx"
import VideoPlayer from "./VideoPlayer.jsx"

export default function Video() {
    const { videoId } = useParams()

    const [showDeleteVideoModal, setShowDeleteVideoModal] = useState()

    const [videoHostId, setVideoHostId] = useState()
    const [videoCategory, setVideoCategory] = useState()
    const [videoTags, setVideoTags] = useState([])

    const [videoNotes, setVideoNotes] = useState([])

    const [activeVideoNote, setActiveVideoNote] = useState({})
    const [activeNoteTimestamp, setActiveNoteTimestamp] = useState()
    const [nearestNoteActive, setNearestNoteActive] = useState({})

    const [videoTitle, setVideoTitle] = useState()
    const [videoDescription, setVideoDescription] = useState()

    const { data, isSuccess, isLoading, isError, error } =
        useGetSingleVideo(videoId)

    // 54 - edit video
    // [X] Add states for title and description
    // [ ] Add edit video modal
    // [ ] patch video_title and/or video_description from videoId in modal

    // Get current video time
    const playerRef = useRef(null)

    const getCurrentTime = () => {
        if (playerRef.current) {
            if (typeof playerRef.current.getCurrentTime === "function") {
                const currentTime = Math.floor(
                    playerRef.current.getCurrentTime()
                )
                // console.log("Current timestamp: ", currentTime)
                return currentTime
            } else {
                console.error("getCurrentTime method is not available")
            }
        } else {
            console.error("Player is not ready")
        }
        return 0
    }

    // src/pages/Video/Video.jsx

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = getCurrentTime()
            const nearestNote = findNearestNoteBeforeNext(currentTime)
            if (nearestNote && nearestNote.id !== activeVideoNote.id) {
                //console.log("nearest note: ", nearestNote)
                setActiveVideoNote(nearestNote)
            }
        }, 1000)

        return () => {
            console.log("cleared interval")
            clearInterval(interval)
        }
    }, [videoNotes, activeVideoNote, activeNoteTimestamp, getCurrentTime, []])

    const findNearestNoteBeforeNext = (currentTime) => {
        for (let i = videoNotes.length - 1; i >= 0; i--) {
            if (videoNotes[i].note_timestamp <= currentTime) {
                if (
                    i === videoNotes.length - 1 ||
                    videoNotes[i + 1].note_timestamp > currentTime
                ) {
                    return videoNotes[i]
                }
            }
        }
        return null
    }

    // console.log("outside effect: ", data)
    useEffect(() => {
        if (data) {
            setVideoHostId(data.video_host_id)
            setVideoCategory(data.category)
            setVideoTags(data.tags)

            setVideoTitle(data.video_title)
            setVideoDescription(data.video_description)

            const sortedNotes = data.notes.sort(
                (a, b) => a.note_timestamp - b.note_timestamp
            )
            setVideoNotes(sortedNotes)
            console.log("videotags: ", videoTags)

            // console.log("inside effect: ", data.notes)
        }
    }, [data])

    // useEffect(() => {
    //     if (videoNotes.length > 0 && !activeVideoNote.id) {
    //         setActiveVideoNote(videoNotes[0])
    //         // console.log("active note: ", videoNotes[0])
    //         // console.log("active note title: ", videoNotes[0].note_title)
    //     }
    // }, [videoNotes])

    useEffect(() => {
        console.log("activeNote: ", activeVideoNote)
        setActiveNoteTimestamp(activeVideoNote.note_timestamp)
        console.log("activeNote Timestamp", activeNoteTimestamp)
        // console.log("-----activeNoteDescription: ", activeNoteDescription)
        // startVideoAtTime(secondsToTime(activeNoteTimestamp))
    }, [activeVideoNote])

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleDeleteVideo = () => {
        console.log("Delete video")
        setShowDeleteVideoModal(!showDeleteVideoModal)
    }

    const modals = (
        <>
            {showDeleteVideoModal && (
                <DeleteVideoModal
                    setShowDeleteVideoModal={setShowDeleteVideoModal}
                />
            )}
        </>
    )

    if (isSuccess) {
        return (
            <div>
                {modals}
                <div className="mx-auto flex max-w-screen-xl flex-col gap-4 pt-8">
                    {/*Full width video header*/}

                    <VideoHeader video={data} />
                    <div className="flex gap-8">
                        {/*Left column content*/}

                        <div className="flex w-2/3 flex-col gap-8">
                            {/*Video*/}

                            <VideoPlayer
                                videoHostId={videoHostId}
                                activeNoteTimestamp={activeNoteTimestamp}
                                playerRef={playerRef}
                            />

                            <div>
                                <NoteDescription
                                    activeVideoNote={activeVideoNote}
                                />
                            </div>
                        </div>
                        {/*Right column content*/}

                        <div className="flex w-1/3 flex-col gap-8">
                            {/*Video notes*/}

                            <NotesSection
                                videoNotes={videoNotes}
                                activeVideoNote={activeVideoNote}
                                setActiveVideoNote={setActiveVideoNote}
                                videoId={videoId}
                                getCurrentTime={getCurrentTime}
                                nearestNoteActive={nearestNoteActive}
                            />

                            <div>
                                {/*Video taxonomies*/}

                                <div className="flex flex-col gap-8">
                                    <VideoTags videoTags={videoTags} />
                                    <VideoCategory
                                        videoCategory={data.category}
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                {/*Delete video*/}
                                <Button
                                    type="danger-secondary"
                                    text="Delete Video"
                                    onClick={handleDeleteVideo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
