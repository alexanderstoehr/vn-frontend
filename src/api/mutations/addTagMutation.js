import { postAttachTagEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const addTagMutation = async (tagData, videoId) => {
    const token = getAccessTokenFunction()
    try {
        const res = await apiVeenotes.post(
            postAttachTagEndpoint(videoId),
            tagData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return res.data
    } catch (e) {
        throw new Error(e)
    }
}
