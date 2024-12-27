import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editNoteMutation } from "../api/mutations/editNoteMutation.js"

export const useEditNoteMutation = () => {
    let queryClient = useQueryClient()
    return useMutation({
        mutationFn: (noteData) => {
            console.log("Sending request to:", editNoteMutation())
            return editNoteMutation(noteData)
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
