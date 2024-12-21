import { useMutation } from "@tanstack/react-query"
import { addNoteMutation } from "../api/mutations/addNoteMutation.js"
import { postNoteEndpoint } from "../api/endpoints.js"

export const useAddNoteMutation = () => {
    return useMutation({
        mutationFn: (spaceData) => {
            console.log("Sending request to:", postNoteEndpoint)
            return addNoteMutation(spaceData)
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.error("Add note failed in Mutation:", error)
        },
    })
}
