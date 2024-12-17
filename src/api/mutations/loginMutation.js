import { postTokenEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"

export const loginMutation = async (credentials) => {
    try {
        const res = await apiVeenotes.post(postTokenEndpoint, credentials)
        return res.data
    } catch (e) {
        throw new Error(e)
    }
}
