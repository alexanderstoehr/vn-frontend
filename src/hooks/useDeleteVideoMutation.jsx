import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { deleteVideoMutation } from "../api/mutations/deleteVideoMutation.js"

export const useDeleteVideoMutation = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (videoId) => {
            return deleteVideoMutation(videoId)
        },
        onSuccess: () => {
            console.log("Video deleted.")
            navigate("/spaces")
        },
        onError: (error) => {
            console.error(`Video deletion failed: `, error)
        },
    })
}
