import { useEffect, useRef, useState } from "react"
import video from "../../data/dummyData/demoVideo.json"
import {
    HiOutlineBookmark,
    HiOutlineCalendar,
    HiOutlineFolder,
    HiOutlineLightBulb,
    HiOutlineTag,
    HiPlus,
} from "react-icons/hi"
import Button from "../../components/primitives/Button.jsx"
import HelpLabel from "../../components/primitives/HelpLabel.jsx"
import InputTextLine from "../../components/primitives/InputTextLine.jsx"
import InputSelect from "../../components/primitives/InputSelect.jsx"
import videoCategories from "../../data/dummyData/videoCategories.json"
import Tag from "../../components/primitives/Tag.jsx"
import Note from "./Note.jsx"
import { useParams } from "react-router-dom"
import { useGetSingleVideo } from "../../hooks/useGetSingleVideo.jsx"
import { formatDate, secondsToTime } from "../../utils/formatting.js"
import AddNoteModal from "../../components/modals/AddNoteModal.jsx"

export default function Video() {
    const noteDescriptionRef = useRef(null)
    const { videoId } = useParams()

    // when current data differs from server data = false --- check on video or note state changes
    const [saved, setSaved] = useState(true)

    const [showAddNoteModal, setShowAddNoteModal] = useState()

    //Video Variables
    const [videoTitle, setVideoTitle] = useState()
    const [videoDescription, setVideoDescription] = useState()
    const [videoHostId, setVideoHostId] = useState()
    const [createdAt, setCreatedAt] = useState()
    const [noteCount, setNoteCount] = useState()
    const [videoCategory, setVideoCategory] = useState()
    const [videoTags, setVideoTags] = useState([])

    //Test Note patching
    let currentTimeStamp = Math.round(Math.random() * 500)
    const notePayload = {
        note_title: "",
        note_description: "Add your note description here...",
        note_timestamp: currentTimeStamp,
        video: videoId,
        video_id: videoId,
    }

    //Note Variables
    const [videoNotes, setVideoNotes] = useState([])
    const propObject = notePayload

    //Active Note Variables
    const [activeVideoNote, setActiveVideoNote] = useState("")
    const [activeVideoNoteTitle, setActiveVideoNoteTitle] = useState("")
    const [activeNoteDescription, setActiveNoteDescription] = useState("")
    const [activeNoteTimestamp, setActiveNoteTimestamp] = useState()

    const { data, isSuccess, isLoading, isError, error } =
        useGetSingleVideo(videoId)

    // console.log("outside effect: ", data)

    useEffect(() => {
        if (data) {
            setVideoTitle(data.video_title)
            setVideoDescription(data.video_description)
            setVideoHostId(data.video_host_id)
            setCreatedAt(formatDate(data.created_at))
            setNoteCount(data.notes_count)
            setVideoCategory(data.category.category_name)
            setVideoTags(data.tags)
            const sortedNotes = data.notes.sort(
                (a, b) => a.note_timestamp - b.note_timestamp
            )
            setVideoNotes(sortedNotes)

            // console.log("inside effect: ", data.notes)
        }
    }, [data])

    useEffect(() => {
        if (videoNotes.length > 0) {
            setActiveVideoNote(videoNotes[0])
            setActiveVideoNoteTitle(videoNotes[0].note_title)
            setActiveNoteDescription(videoNotes[0].note_description)
            console.log("active note: ", videoNotes[0])
            console.log("active note title: ", videoNotes[0].note_title)
        }
    }, [videoNotes])

    const onChange = (e) => {
        console.log(e)
    }

    const handleNoteClick = (note) => {
        setActiveVideoNote(note)
        setActiveNoteDescription(note.note_description)
        setActiveVideoNoteTitle(note.note_title)
        setActiveNoteTimestamp(note.note_timestamp)
    }

    useEffect(() => {
        console.log("activeNote: ", activeVideoNote)
        console.log("-----activeNoteDescription: ", activeNoteDescription)
        if (activeNoteTimestamp) {
            startVideoAtTime(secondsToTime(activeNoteTimestamp))
        }
    }, [activeVideoNote])

    const handleDescriptionChange = (e) => {
        console.log("value: ", e.target.value)
        setActiveNoteDescription(e.target.id)
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    //Video Handlings
    const startVideoAtTime = (time) => {
        console.log("Starting video at time: ", time)
    }

    //Note Handlings
    const editNoteTitle = () => {
        console.log("Editing note title")
    }

    const handleAddNote = () => {
        console.log("Adding note")
        setShowAddNoteModal(true)
    }

    if (isSuccess) {
        return (
            <div>
                {showAddNoteModal && (
                    <AddNoteModal
                        propObject={propObject}
                        setShowAddNoteModal={setShowAddNoteModal}
                    />
                )}
                <div className="mx-auto flex max-w-screen-xl flex-col gap-4 pt-8">
                    <div className="flex justify-between text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-400">
                        <div className="">
                            <div className="">{videoTitle}</div>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-row items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                    <HiOutlineCalendar className="h-4 w-4 text-gray-500" />
                                    {createdAt}
                                </div>
                                <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                    <HiOutlineBookmark className="h-4 w-4 text-gray-500" />
                                    {noteCount} Notes
                                </div>
                                <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                    <HiOutlineFolder className="h-4 w-4 text-gray-500" />
                                    {videoCategory}
                                </div>
                                <div className="flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                    <HiOutlineTag className="h-4 w-4 text-gray-500" />
                                    {videoTags.map((tag, index) => (
                                        <span key={tag.id}>
                                            {tag.tag_name}
                                            {index < videoTags.length - 1 &&
                                                ", "}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Button
                                iconStart={<HiOutlineLightBulb />}
                                text="Shortkeys"
                                type="secondary"
                            />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        {/*Left Column Main Content*/}
                        <div className="flex w-2/3 flex-col gap-8">
                            <div className="relative h-0 w-full pb-[56.25%]">
                                <iframe
                                    src="https://www.youtube.com/embed/SqcY0GlETPk?si=IoUeiCrkUBvlnYXI?rel=0&modestbranding=1&showinfo=0&controls=1"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="absolute left-0 top-0 h-full w-full"></iframe>
                            </div>
                            <div>
                                <div className="">
                                    <div className="flex flex-col">
                                        <HelpLabel text="Your current Note:" />
                                        <div className="mb-4 text-lg font-semibold">
                                            {activeVideoNoteTitle}
                                        </div>
                                    </div>
                                    <div className="">
                                        <textarea
                                            id="noteDescription"
                                            ref={noteDescriptionRef}
                                            placeholder="Add a note..."
                                            className="min-h-96 w-full"
                                            onChange={handleDescriptionChange}
                                            value={activeNoteDescription}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Right Column Main Content*/}
                        <div className="flex w-1/3 flex-col gap-8">
                            <div>
                                <div className="mb-4 flex items-center">
                                    <Button
                                        iconStart={<HiPlus />}
                                        text="Add Note"
                                        type="primary"
                                        className="mr-4"
                                        onClick={handleAddNote}
                                    />
                                    <HelpLabel text="Add a note at the current time" />
                                </div>
                                <div className="">
                                    <div className="mr-4 text-lg font-semibold">
                                        Your Notes
                                    </div>
                                    <div className="rounded-xl border border-gray-300">
                                        {videoNotes.map((note, index) => (
                                            <Note
                                                note={note}
                                                key={note.id}
                                                active={
                                                    note.id ===
                                                    activeVideoNote.id
                                                }
                                                time={secondsToTime(
                                                    note.note_timestamp
                                                )}
                                                onClick={handleNoteClick}
                                                isFirst={index === 0}
                                                isLast={
                                                    index ===
                                                    video.notes.length - 1
                                                }
                                                editNoteTitle={editNoteTitle}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col">
                                        <div className="flex">
                                            <div className="mr-4 text-lg font-semibold">
                                                Video Tags
                                            </div>
                                            <HelpLabel text="Add up to 3 tags to help categorize your videos" />
                                        </div>
                                        <InputTextLine
                                            onChange={onChange}
                                            value=""
                                            placeholder="Add Tag"
                                        />
                                        <div className="mt-4 flex flex-wrap">
                                            {videoTags.map((tag) => (
                                                <Tag
                                                    text={tag.tag_name}
                                                    key={tag.id}
                                                    close="true"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex">
                                            <div className="mr-4 text-lg font-semibold">
                                                Video Category
                                            </div>
                                            <HelpLabel text="Add a category to help categorize your videos" />
                                        </div>
                                        <InputSelect
                                            options={videoCategories.categories}
                                            selectedValueID="3"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
