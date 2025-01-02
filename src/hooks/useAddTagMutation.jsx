import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postAttachTagEndpoint } from "../api/endpoints.js"
import { addTagMutation } from "../api/mutations/addTagMutation.js"

export const useAddTagMutation = () => {
    let queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ tagData, videoId }) => {
            console.log(
                "Addtagmutation - Sending request to:",
                postAttachTagEndpoint(videoId)
            )
            return addTagMutation(tagData, videoId)
        },
        onSuccess: (data, variables) => {
            console.log(data)
            queryClient.invalidateQueries(["singleVideo", variables.videoId])
        },
        onError: (error) => {
            console.error("Add tag failed in Mutation:", error)
        },
    })
}
