import { apiVeenotes } from "../axios.js"
import { passwordResetEndpoint } from "../endpoints.js"

export const requestPasswordResetMutation = async (email) => {
    try {
        await apiVeenotes.post(passwordResetEndpoint, {
            email: email,
        })
    } catch (e) {
        throw new Error(e)
    }
}
