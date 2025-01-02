import { postDetachTagEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const removeTagMutation = async (tagData, videoId) => {
    const token = getAccessTokenFunction()
    try {
        const res = await apiVeenotes.post(
            postDetachTagEndpoint(videoId),
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
