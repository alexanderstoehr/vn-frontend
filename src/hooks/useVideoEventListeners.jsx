import { shortkeyFunctions } from "../utils/shortkeys.js"

export const useVideoEventListeners = () => {
    window.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            shortkeyFunctions.playerPlayPause()
        }
        if (e.code === "ArrowRight") {
            shortkeyFunctions.playerTenForward(10)
        }
        if (e.code === "ArrowLeft") {
            shortkeyFunctions.playerTenBack(10)
        }
        if (e.code === "KeyR") {
            shortkeyFunctions.playerReplayCurrentNote()
        }
        if (e.code === "KeyN") {
            shortkeyFunctions.playerJumpToNextNote()
        }
        if (e.code === "KeyP") {
            shortkeyFunctions.playerJumpToPreviousNote()
        }
        if (e.code === "KeyM") {
            shortkeyFunctions.playerMute()
        }
        if (e.code === "KeyS") {
            shortkeyFunctions.playerSwitchSubtitles()
        }
        if (e.code === "KeyA") {
            shortkeyFunctions.noteAddNote()
        }
        if (e.code === "KeyD") {
            shortkeyFunctions.noteFocusDescription()
        }
    })
}
