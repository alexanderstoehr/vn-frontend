import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addNoteMutation } from "../api/mutations/addNoteMutation.js"
import { postNoteEndpoint } from "../api/endpoints.js"

export const useAddNoteMutation = () => {
    let queryClient = useQueryClient()
    return useMutation({
        mutationFn: (noteData) => {
            console.log("Sending request to:", postNoteEndpoint)
            return addNoteMutation(noteData)
        },
        onSuccess: (data, variables) => {
            console.log(data)
            queryClient.invalidateQueries(["singleVideo", variables.video_id])
        },
        onError: (error) => {
            console.error("Add note failed in Mutation:", error)
        },
    })
}
