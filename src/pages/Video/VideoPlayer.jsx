import { useEffect, useRef } from "react"
import Button from "../../components/primitives/Button.jsx"
import { secondsToTime } from "../../utils/formatting.js"

export default function VideoPlayer({ videoHostId, activeNoteTimestamp }) {
    const playerRef = useRef(null)

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

    const onPlayerReady = () => {
        console.log("Player is ready")
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

    const seekTo = (seconds) => {
        if (
            playerRef.current &&
            typeof playerRef.current.seekTo === "function"
        ) {
            playerRef.current.seekTo(seconds, true)
        } else {
            console.error(
                "Player is not ready or seekTo method is not available"
            )
        }
    }

    useEffect(() => {
        seekTo(activeNoteTimestamp)
    }, [activeNoteTimestamp])

    const getCurrentTime = () => {
        if (playerRef.current) {
            console.log(
                "Current timestamp: ",
                secondsToTime(playerRef.current.getCurrentTime())
            )
            return secondsToTime(playerRef.current.getCurrentTime())
        }
    }

    return (
        <>
            <div className="relative h-0 w-full pb-[56.25%]">
                <div
                    id="youtube-player"
                    className="absolute left-0 top-0 h-full w-full rounded-xl"></div>
            </div>

            <Button
                text="Log current timestamp"
                onClick={() => getCurrentTime()}
            />
        </>
    )
}
