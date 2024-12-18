import { postSpaceEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessToken } from "../../utils/helpers.js"

export const addSpaceMutation = async (spaceData) => {
    try {
        const res = await apiVeenotes.post(postSpaceEndpoint, spaceData, {
            headers: {
                Authorization: `Bearer ${getAccessToken}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error(e)
    }
}
