import { getUsersSpacesEndpoint } from "../endpoints.js"
import { apiVeenotes } from "../axios.js"

export const getAllSpacesQuery = async () => {
    const sessionStorageObj = JSON.parse(sessionStorage.getItem("vud"))
    const token = sessionStorageObj.at
    //console.log("token used: ", token)

    try {
        const res = await apiVeenotes.get(getUsersSpacesEndpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data
    } catch (e) {
        throw new Error("Error while fetching all Spaces: " + e.message)
    }
}
