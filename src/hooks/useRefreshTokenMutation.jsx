import { postRefreshTokenEndpoint } from "../api/endpoints.js"
import { useMutation } from "@tanstack/react-query"
import { apiVeenotes } from "../api/axios.js"
import { useUser } from "../context/UserContext.jsx"

export const useRefreshTokenMutation = () => {
    const { setSessionStorage } = useUser()

    return useMutation({
        mutationFn: (token) => {
            return apiVeenotes.post(postRefreshTokenEndpoint, {
                refresh: token,
            })
        },
        onSuccess: (data) => {
            console.log("Refetched RT: ", data.data.access)
            //console.log("Before setSession", user)
            setSessionStorage(data.data.access)
            //console.log("After setSession", user)
        },
        onError: (error) => {
            console.error("Refetching Token failed:", error)
        },
    })
}
