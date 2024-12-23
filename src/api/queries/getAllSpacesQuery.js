import { getUsersSpacesEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const getAllSpacesQuery = async () => {
    const token = getAccessTokenFunction()

    // console.log("token used in all spaces fetch: ", token)

    try {
        const res = await apiVeenotes.get(getUsersSpacesEndpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching all Spaces: " + e.message)
    }
}
