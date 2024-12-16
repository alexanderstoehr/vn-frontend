import { useMutation } from "@tanstack/react-query"
import { postTokenEndpoint } from "../api/endpoints.js"
import { useNavigate } from "react-router-dom"
import { loginMutation } from "../api/mutations/loginMutation.js"
import { createTokenExpirationDate } from "../utils/pureFuncs.js"

export const useLoginMutation = (redirect) => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (credentials) => {
            console.log("Sending request to:", postTokenEndpoint)
            return loginMutation(credentials)
        },
        onSuccess: (data) => {
            console.log(data.user.id, data.access)
            sessionStorage.setItem(
                "vud",
                JSON.stringify({
                    at: data.access,
                    ea: createTokenExpirationDate,
                })
            )

            localStorage.setItem("vrt", JSON.stringify({ rt: data.refresh }))
            console.log("redirect to: ", redirect)
            redirect ? navigate(redirect) : null
        },
        onError: (error) => {
            console.error("Login failed:", error)
        },
    })
}
