export const shortkeyFunctions = {
    playerPlayPause: () => {
        console.log("Playing or Pausing")
    },
    playerTenForward: (time) => {
        console.log("Seeking to", time)
    },
    playerTenBack: (time) => {
        console.log("Seeking to", time)
    },
    playerReplayCurrentNote: () => {
        console.log("Replaying current note")
    },
    playerJumpToNextNote: () => {
        console.log("Jumping to next note")
    },
    playerJumpToPreviousNote: () => {
        console.log("Jumping to previous note")
    },
    playerMute: () => {
        console.log("Muting")
    },
    playerSwitchSubtitles: () => {
        console.log("Switching subtitles")
    },
    noteAddNote: () => {
        console.log("Adding note")
    },
    noteFocusDescription: () => {
        console.log("Focusing description")
    },
}
