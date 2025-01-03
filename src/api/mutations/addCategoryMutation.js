import { postAttachCategoryEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const addCategoryMutation = async (categoryData, videoId) => {
    const token = getAccessTokenFunction()
    try {
        const res = await apiVeenotes.post(
            postAttachCategoryEndpoint(videoId),
            categoryData,
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
