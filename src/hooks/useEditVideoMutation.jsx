import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editVideoMutation } from "../api/mutations/editVideoMutation.js"
import { patchSingleVideoEndpoint } from "../api/endpoints.js"

export const useEditVideoMutation = () => {
    let queryClient = useQueryClient()
    return useMutation({
        mutationFn: (videoData) => {
            console.log(
                "Sending request to:",
                patchSingleVideoEndpoint(videoData.id)
            )
            return editVideoMutation(videoData)
        },
        onSuccess: (data, variables) => {
            console.log("onSuccess data in videopatch: ", data)
            queryClient.invalidateQueries(["singleVideo", variables.video_id])
        },
        onError: (error) => {
            console.error("Edit video failed in Mutation:", error)
        },
    })
}
