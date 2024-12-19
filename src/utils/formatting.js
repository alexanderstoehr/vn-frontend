export function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0")
    const minutes = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, "0")
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0")
    return `${hours}:${minutes}:${remainingSeconds}`
}

export function timeToSeconds(time) {
    const [hours, minutes, seconds] = time.split(":").map(Number)
    return hours * 3600 + minutes * 60 + seconds
}

export function formatDate(dateString) {
    const date = new Date(dateString)
    const day = date.getUTCDate()
    const month = date.toLocaleString("en-US", { month: "short" })
    const year = date.getUTCFullYear().toString().slice(-2)
    return `${day} ${month} ${year}`
}
