import { apiVeenotes } from "../axios.js"
import { postRefreshTokenEndpoint } from "../endpoints.js"
import { createTokenExpirationDate } from "../../utils/pureFuncs.js"

export const refreshTokenMutation = async (token) => {
    try {
        const response = await apiVeenotes.post(postRefreshTokenEndpoint, {
            refresh: token,
        })

        return response.data
    } catch (e) {
        throw new Error(e)
    }
}
