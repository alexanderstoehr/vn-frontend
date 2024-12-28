import { patchSingleNoteEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const editNoteMutation = async (noteData) => {
    console.log("Payload noteData: ", noteData)
    let token = getAccessTokenFunction()

    try {
        const res = await apiVeenotes.patch(
            patchSingleNoteEndpoint(noteData.id),
            noteData,
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
