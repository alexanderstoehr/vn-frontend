import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postDetachTagEndpoint } from "../api/endpoints.js"
import { removeTagMutation } from "../api/mutations/removeTagMutation.js"

export const useRemoveTagMutation = () => {
    let queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ tagData, videoId }) => {
            console.log(
                "Removetagmutation - Sending request to:",
                postDetachTagEndpoint(videoId)
            )
            return removeTagMutation(tagData, videoId)
        },
        onSuccess: (data, variables) => {
            console.log(data)
            queryClient.invalidateQueries(["singleVideo", variables.videoId])
        },
        onError: (error) => {
            console.error("Remove tag failed in Mutation:", error)
        },
    })
}
