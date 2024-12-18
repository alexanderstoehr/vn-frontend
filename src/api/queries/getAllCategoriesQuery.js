import { getAllCategoriesEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"
import { getAccessToken } from "../../utils/helpers.js"

export const getAllCategoriesQuery = async () => {
    //console.log("token used: ", token)

    try {
        const res = await apiVeenotes.get(getAllCategoriesEndpoint, {
            headers: {
                Authorization: `Bearer ${getAccessToken}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching all Spaces: " + e.message)
    }
}
