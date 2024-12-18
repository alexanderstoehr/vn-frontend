import { useMutation } from "@tanstack/react-query"
import { addSpaceMutation } from "../api/mutations/addSpaceMutation.js"
import { postSpaceEndpoint } from "../api/endpoints.js"

export const useAddSpaceMutation = () => {
    return useMutation({
        mutationFn: (spaceData) => {
            console.log("Sending request to:", postSpaceEndpoint)
            return addSpaceMutation(spaceData)
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.error("Add space failed in Mutation:", error)
        },
    })
}
