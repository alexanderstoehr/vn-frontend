import { getSingleSpaceEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const getSingleSpaceQuery = async (spaceID) => {
    //console.log("token used: ", token)
    const accessToken = getAccessTokenFunction()

    try {
        const res = await apiVeenotes.get(getSingleSpaceEndpoint(spaceID), {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching all Spaces: " + e.message)
    }
}
