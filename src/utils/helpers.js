import addVideoDocumentation from "../data/content/documentation/add-video.js"

export const documentationObject = [addVideoDocumentation]

// ToDo: Replace token calls with helper vars:
export const getAccessToken =
    JSON.parse(sessionStorage.getItem("vud"))?.at || "defaultAccessToken"
export const getRefreshToken =
    JSON.parse(localStorage.getItem("vrt"))?.rt || "defaultRefreshToken"
