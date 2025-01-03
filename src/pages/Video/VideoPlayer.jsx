import { useEffect, useRef } from "react"

export default function VideoPlayer({ videoHostId }) {
    const playerRef = useRef(null)
    console.log("Video host id: ", videoHostId)

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

    const onPlayerReady = (event) => {
        console.log("Player is ready")
        //event.target.playVideo()
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

    return (
        <div className="relative h-0 w-full pb-[56.25%]">
            <div
                id="youtube-player"
                className="absolute left-0 top-0 h-full w-full rounded-xl"></div>
        </div>
    )
}
