import { getAccessTokenFunction } from "../../utils/helpers.js"
import { apiVeenotes } from "../axios.js"
import { getUsersTagsEndpoint } from "../endpoints.js"

export const getUserTagsQuery = async () => {
    const token = getAccessTokenFunction()

    try {
        const res = await apiVeenotes.get(getUsersTagsEndpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching user tags: ", e)
    }
}
