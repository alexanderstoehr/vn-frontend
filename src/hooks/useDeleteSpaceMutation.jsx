import { useMutation } from "@tanstack/react-query"
import { deleteSpaceMutation } from "../api/mutations/deleteSpaceMutation.js"
import { useNavigate } from "react-router-dom"

export const useDeleteSpaceMutation = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (spaceId) => {
            return deleteSpaceMutation(spaceId)
        },
        onSuccess: () => {
            console.log("space deleted")
            navigate("/spaces")
        },
        onError: (error) => {
            console.error("Space deletion failed:", error)
        },
    })
}
