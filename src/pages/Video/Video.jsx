import { useEffect, useState } from "react"
import Button from "../../components/primitives/Button.jsx"
import { useParams } from "react-router-dom"
import { useGetSingleVideo } from "../../hooks/useGetSingleVideo.jsx"
import DeleteVideoModal from "../../components/modals/DeleteVideoModal.jsx"
import VideoHeader from "./VideoHeader.jsx"
import NoteDescription from "./NoteDescription.jsx"
import VideoTags from "./VideoTags.jsx"
import VideoCategory from "./VideoCategory.jsx"
import NotesSection from "./NotesSection.jsx"
import VideoEmbed from "./VideoEmbed.jsx"

export default function Video() {
    const { videoId } = useParams()

    const [showDeleteVideoModal, setShowDeleteVideoModal] = useState()

    const [videoHostId, setVideoHostId] = useState()
    const [videoCategory, setVideoCategory] = useState()
    const [videoTags, setVideoTags] = useState([])

    const [videoNotes, setVideoNotes] = useState([])

    const [activeVideoNote, setActiveVideoNote] = useState({})
    const [activeNoteTimestamp, setActiveNoteTimestamp] = useState()

    const { data, isSuccess, isLoading, isError, error } =
        useGetSingleVideo(videoId)

    // console.log("outside effect: ", data)
    useEffect(() => {
        if (data) {
            setVideoHostId(data.video_host_id)
            setVideoCategory(data.category)
            setVideoTags(data.tags)
            const sortedNotes = data.notes.sort(
                (a, b) => a.note_timestamp - b.note_timestamp
            )
            setVideoNotes(sortedNotes)
            console.log("videotags: ", videoTags)

            // console.log("inside effect: ", data.notes)
        }
    }, [data])

    useEffect(() => {
        if (videoNotes.length > 0) {
            setActiveVideoNote(videoNotes[0])
            // console.log("active note: ", videoNotes[0])
            // console.log("active note title: ", videoNotes[0].note_title)
        }
    }, [videoNotes])

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

    //Video Handlings
    const startVideoAtTime = (time) => {
        console.log("Starting video at time: ", time)
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

                            <VideoEmbed />

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
