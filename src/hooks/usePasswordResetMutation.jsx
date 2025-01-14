import { useMutation } from "@tanstack/react-query"
import { passwordResetMutation } from "../api/mutations/passwordResetMutation.js"

export const usePasswordResetMutation = () => {
    return useMutation({
        mutationFn: (passwordResetObject) => {
            console.log("Posting password reset")
            return passwordResetMutation(passwordResetObject)
        },
        onSuccess: () => console.log("Password reset succesful"),
        onError: (e) => console.error(e),
    })
}
