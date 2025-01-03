import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postAttachCategoryEndpoint } from "../api/endpoints.js"
import { addCategoryMutation } from "../api/mutations/addCategoryMutation.js"

export const useAddCategoryMutation = () => {
    let queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ categoryData, videoId }) => {
            console.log(
                "EditCategory - Sending request to:",
                postAttachCategoryEndpoint(videoId),
                "With payload: ",
                categoryData
            )
            return addCategoryMutation(categoryData, videoId)
        },
        onSuccess: (data, variables) => {
            console.log(data)
            queryClient.invalidateQueries(["singleVideo", variables.videoId])
        },
        onError: (error) => {
            console.error("Change category failed in Mutation:", error)
        },
    })
}
