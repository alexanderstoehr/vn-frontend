import { useMutation } from "@tanstack/react-query"
import { validateAccessTokenMutation } from "../api/mutations/validateAccessTokenMutation.js"

export const useAccessTokenValidation = () => {
    return useMutation({
        mutationFn: (token) => {
            return validateAccessTokenMutation(token)
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.error("Token validation failed:", error)
        },
    })
}
