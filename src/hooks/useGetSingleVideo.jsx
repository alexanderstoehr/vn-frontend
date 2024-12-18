import { useQuery } from "@tanstack/react-query"
import { getSingleVideoQuery } from "../api/queries/getSingleVideoQuery.js"

export const useGetSingleVideo = (videoId) => {
    const queryResult = useQuery({
        queryKey: ["singleVideo"],
        queryFn: () => {
            return getSingleVideoQuery(videoId)
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.error("Get video failed:", error)
        },
    })

    return queryResult
}
