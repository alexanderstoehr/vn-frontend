import { getSingleVideoEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessToken } from "../../utils/helpers.js"

export const getSingleVideoQuery = async (videoId) => {
    try {
        const res = await apiVeenotes.get(getSingleVideoEndpoint(videoId), {
            headers: {
                Authorization: `Bearer ${getAccessToken}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching all Spaces: " + e.message)
    }
}
