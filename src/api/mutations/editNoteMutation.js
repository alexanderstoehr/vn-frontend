import { patchSingleNoteEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessToken } from "../../utils/helpers.js"

export const editNoteMutation = async (noteData) => {
    try {
        const res = await apiVeenotes.patch(
            patchSingleNoteEndpoint(),
            noteData,
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
