import { getAccessTokenFunction } from "../../utils/helpers.js"
import { apiVeenotes } from "../axios.js"
import { deleteSingleNoteEndpoint } from "../endpoints.js"

export const deleteNoteMutation = async (noteId) => {
    let token = getAccessTokenFunction()

    try {
        const res = await apiVeenotes.delete(deleteSingleNoteEndpoint(noteId), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res
    } catch (e) {
        throw new Error(
            `Error while deleting Video ID (${noteId}): ` + e.message
        )
    }
}
