import { patchSingleVideoEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const editVideoMutation = async (videoData) => {
    console.log("Payload noteData: ", videoData)
    let token = getAccessTokenFunction()

    try {
        const res = await apiVeenotes.patch(
            patchSingleVideoEndpoint(videoData.id),
            videoData,
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
