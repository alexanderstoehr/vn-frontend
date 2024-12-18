import { postVerifyTokenEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"

export const validateAccessTokenMutation = async (token) => {
    // console.log("token in mutation: ", token)
    try {
        await apiVeenotes.post(postVerifyTokenEndpoint, {
            token: token,
        })
        //console.log("posting to endpoint")
        return true
    } catch (e) {
        throw new Error(e)
    }
}
