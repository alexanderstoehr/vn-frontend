import { passwordResetVerifyEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"

export const passwordResetMutation = async (passwordResetObject) => {
    try {
        await apiVeenotes.patch(
            passwordResetVerifyEndpoint,
            passwordResetObject
        )
    } catch (e) {
        throw new Error(e)
    }
}
