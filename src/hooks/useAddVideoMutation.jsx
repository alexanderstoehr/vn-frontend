import { useMutation } from "@tanstack/react-query"
import { postVideoEndpoint } from "../api/endpoints.js"
import { addVideoMutation } from "../api/mutations/addVideoMutation.js"

export const useAddVideoMutation = () => {
    return useMutation({
        mutationFn: (videoData) => {
            console.log(
                "Sending request to:",
                postVideoEndpoint,
                "Payload:",
                videoData
            )
            return addVideoMutation(videoData)
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.error("Add space failed in Mutation:", error)
        },
    })
}
