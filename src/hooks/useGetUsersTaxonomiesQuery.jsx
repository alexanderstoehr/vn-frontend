import { useQuery } from "@tanstack/react-query"
import { getUserCategoriesQuery } from "../api/queries/getUserCategoriesQuery.js"
import { getUserTagsQuery } from "../api/mutations/getUserTagsQuery.js"

export const useGetUsersTaxonomiesQuery = () => {
    const categoriesQuery = useQuery({
        queryKey: ["userCategories"],
        queryFn: () => {
            return getUserCategoriesQuery()
        },
        onSuccess: (data) => {
            console.log("User cats fetched: ", data)
        },
        onError: (e) => {
            console.error("Error while fetching user cats: ", e)
        },
    })

    const tagsQuery = useQuery({
        queryKey: ["userTags"],
        queryFn: () => {
            return getUserTagsQuery()
        },
        onSuccess: (data) => {
            console.log("User tags fetched: ", data)
        },
        onError: (e) => {
            console.error("error while fetching user tags: ", e)
        },
    })

    return { categoriesQuery, tagsQuery }
}
