import { postNoteEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const addNoteMutation = async (noteData) => {
    const token = getAccessTokenFunction()
    try {
        const res = await apiVeenotes.post(postNoteEndpoint, noteData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error(e)
    }
}
