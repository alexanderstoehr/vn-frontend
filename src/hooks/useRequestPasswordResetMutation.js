import { useMutation } from "@tanstack/react-query"
import { requestPasswordResetMutation } from "../api/mutations/requestPasswordResetMutation.js"

export const useRequestPasswordResetMutation = () => {
    return useMutation({
        mutationFn: (email) => {
            console.log("Sending registration code request")
            return requestPasswordResetMutation(email)
        },
        onSuccess: () => {
            console.log("Password reset code request successful")
        },
        onError: (e) => {
            console.error("Request password reset code failed: ", e)
        },
    })
}
