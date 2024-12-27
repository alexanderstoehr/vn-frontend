import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteNoteMutation } from "../api/mutations/deleteNoteMutation.js"
import { useParams } from "react-router-dom"

export const useDeleteNoteMutation = () => {
    let queryClient = useQueryClient()
    const videoId = useParams().videoId
    console.log("video id from param in useDeleteNoteMuttion: ", videoId)

    return useMutation({
        mutationFn: (noteId) => {
            return deleteNoteMutation(noteId)
        },
        onSuccess: () => {
            console.log(`Note deleted successfully`)
            queryClient.invalidateQueries(["singleVideo", videoId])
        },
        onError: (error) => {
            console.error(`Video deletion failed: `, error)
        },
    })
}
