import { apiVeenotes } from "../axios.js"
import { getAccessToken } from "../../utils/helpers.js"
import { patchSingleVideoEndpoint } from "../endpoints.js"

export const patchVideoMutation = async (videoData) => {
    try {
        const res = await apiVeenotes.post(
            patchSingleVideoEndpoint(),
            videoData,
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken}`,
                },
            }
        )
        return res.data
    } catch (e) {
        throw new Error(e)
    }
}
