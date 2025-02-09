import VideoPlayer from "../pages/Video/VideoPlayer.jsx"
import NoteDescription from "../pages/Video/NoteDescription.jsx"
import NotesSection from "../pages/Video/NotesSection.jsx"
import demoVideo from "../data/dummyData/demoVideo.json"
import { useEffect, useRef, useState } from "react"
import Note from "../pages/Video/Note.jsx"
import { secondsToTime } from "../utils/formatting.js"
import video from "../data/dummyData/demoVideo.json"

export default function SingleDemoVideo() {
    let videoNotes = demoVideo.notes
    let videoHostId = "LYFTGQuwlh8"

    const [activeVideoNote, setActiveVideoNote] = useState(videoNotes[1])
    const [isPlayerReady, setIsPlayerReady] = useState(false)

    const playerRef = useRef(null)

    const handleNoteClick = (note) => {
        console.log("clicked note: ", note)
        setActiveVideoNote(note)
        // setActiveNoteDescription(note.note_description)
        // setActiveVideoNoteTitle(note.note_title)
        // setActiveNoteTimestamp(note.note_timestamp)
    }

    const onPlayerReady = () => {
        console.log("Player is ready")
        setIsPlayerReady(true)
    }

    const onPlayerStateChange = (event) => {
        switch (event.data) {
            case window.YT.PlayerState.PLAYING:
                console.log("Video is playing")
                break
            case window.YT.PlayerState.PAUSED:
                console.log("Video is paused")
                break
            case window.YT.PlayerState.ENDED:
                console.log("Video has ended")
                break
            default:
                break
        }
    }

    useEffect(() => {
        const scriptId = "youtube-iframe-api"
        if (!document.getElementById(scriptId)) {
            const tag = document.createElement("script")
            tag.src = "https://www.youtube.com/iframe_api"
            tag.id = scriptId
            document.body.appendChild(tag)
        }

        const onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("youtube-player", {
                videoId: videoHostId,
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                },
            })
        }

        if (window.YT) {
            onYouTubeIframeAPIReady()
        } else {
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy()
            }
        }
    }, [videoHostId])

    return (
        <div className="flex">
            <div className="flex flex-col">
                <div
                    id="youtube-player"
                    className=""></div>
            </div>
            <div className="flex flex-col">
                <div className="">
                    <div className="mr-4 text-lg font-semibold">Your Notes</div>
                    <div className="rounded-xl border border-gray-300">
                        {videoNotes.map((note, index) => (
                            <Note
                                note={note}
                                key={note.id}
                                active={note.id === activeVideoNote.id}
                                time={secondsToTime(note.note_timestamp)}
                                onClick={handleNoteClick}
                                isFirst={index === 0}
                                isLast={index === video.notes.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
