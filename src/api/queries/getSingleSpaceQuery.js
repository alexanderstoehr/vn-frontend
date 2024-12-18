import { getSingleSpaceEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessToken } from "../../utils/helpers.js"

export const getSingleSpaceQuery = async (spaceID) => {
    //console.log("token used: ", token)

    try {
        const res = await apiVeenotes.get(getSingleSpaceEndpoint(spaceID), {
            headers: {
                Authorization: `Bearer ${getAccessToken}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching all Spaces: " + e.message)
    }
}
