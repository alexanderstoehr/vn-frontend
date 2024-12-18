import { postVideoEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessToken } from "../../utils/helpers.js"

export const addVideoMutation = async (videoData) => {
    try {
        const res = await apiVeenotes.post(postVideoEndpoint, videoData, {
            headers: {
                Authorization: `Bearer ${getAccessToken}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error(e)
    }
}
