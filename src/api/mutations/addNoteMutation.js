import { postNoteEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessToken } from "../../utils/helpers.js"

export const addNoteMutation = async (noteData) => {
    try {
        const res = await apiVeenotes.post(postNoteEndpoint, noteData, {
            headers: {
                Authorization: `Bearer ${getAccessToken}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error(e)
    }
}
