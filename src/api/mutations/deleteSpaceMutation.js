import { getAccessToken } from "../../utils/helpers.js"
import { apiVeenotes } from "../axios.js"
import { deleteSingleSpaceEndpoint } from "../endpoints.js"

export const deleteSpaceMutation = async (spaceId) => {
    try {
        const res = await apiVeenotes.delete(
            deleteSingleSpaceEndpoint(spaceId),
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken}`,
                },
            }
        )
        return res
    } catch (e) {
        throw new Error("Error while deleting Space: " + e.message)
    }
}
