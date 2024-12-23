import addVideoDocumentation from "../data/content/documentation/add-video.js"

export const documentationObject = [addVideoDocumentation]

// --- Session and Local Storage Token Functions

// ToDo: Replace token calls with helper vars:
export const getAccessToken =
    JSON.parse(sessionStorage.getItem("vud"))?.at || "defaultAccessToken"

// Using a function to get the fresh access token - using a var will not update the token after initial load
export const getAccessTokenFunction = () => {
    const vud = sessionStorage.getItem("vud")
    if (vud) {
        const parsedVud = JSON.parse(vud)
        return parsedVud.at || false
    }
    return false
}

export const getRefreshToken =
    JSON.parse(localStorage.getItem("vrt"))?.rt || "defaultRefreshToken"

//YouTube Functions
export function getYoutubeIdFromUrl(url) {
    const regex =
        /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube\.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i
    const match = url.match(regex)
    // console.log("match: ", match)
    // console.log("match 8 : ", match[8])
    return match ? match[8] : null
}

export function getYouTubeThumbnailFromUrl(url) {
    const videoId = getYoutubeIdFromUrl(url)
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}
