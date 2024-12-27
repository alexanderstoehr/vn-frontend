import { getAccessTokenFunction } from "../../utils/helpers.js"
import { apiVeenotes } from "../axios.js"
import { deleteSingleVideoEndpoint } from "../endpoints.js"

export const deleteVideoMutation = async (videoId) => {
    let token = getAccessTokenFunction()

    try {
        const res = await apiVeenotes.delete(
            deleteSingleVideoEndpoint(videoId),
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return res
    } catch (e) {
        throw new Error(
            `Error while deleting Video ID (${videoId}): ` + e.message
        )
    }
}
