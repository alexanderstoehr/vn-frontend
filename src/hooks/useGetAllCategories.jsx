import { getAllCategoriesQuery } from "../api/queries/getAllCategoriesQuery.js"
import { useQuery } from "@tanstack/react-query"

export const useGetAllCategories = () => {
    const queryResult = useQuery({
        queryKey: ["allCategories"],
        queryFn: () => {
            return getAllCategoriesQuery()
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.error("Get all categories failed:", error)
        },
    })

    return queryResult
}
