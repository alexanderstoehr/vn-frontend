import { getUsersCategoriesEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessTokenFunction } from "../../utils/helpers.js"

export const getUserCategoriesQuery = async () => {
    const token = getAccessTokenFunction()

    try {
        const res = await apiVeenotes.get(getUsersCategoriesEndpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching users categories: " + e.message)
    }
}
