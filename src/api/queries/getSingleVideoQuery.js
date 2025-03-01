import { getSingleVideoEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const getSingleVideoQuery = async (videoId) => {
    const token = getAccessTokenFunction()

    try {
        const res = await apiVeenotes.get(getSingleVideoEndpoint(videoId), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching all Spaces: " + e.message)
    }
}
