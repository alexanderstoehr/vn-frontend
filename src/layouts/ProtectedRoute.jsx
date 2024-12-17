import { Outlet, useNavigate } from "react-router-dom"
import AccountHeader from "../components/AccountHeader.jsx"
import { Footer } from "flowbite-react"
import { validateAccessTokenMutation } from "../api/mutations/validateAccessTokenMutation.js"
import { useState } from "react"
import { refreshTokenMutation } from "../api/mutations/refreshTokenMutation.js"
import { useUser } from "../context/UserContext.jsx"

export default function ProtectedRoute() {
    const { setSessionStorage } = useUser()
    const [isLoggedIn, setIsloggedIn] = useState(false)
    const navigate = useNavigate()
    const sessionStorageObj = JSON.parse(sessionStorage.getItem("vud")) || {}
    const localStorageObj = JSON.parse(localStorage.getItem("vrt")) || {}
    const accToken = sessionStorageObj.at
    const refToken = localStorageObj.rt

    const validated = async () => {
        return await validateAccessTokenMutation(accToken)
    }

    validated()
        .then((result) => {
            console.log("Is validated: ", result)
            setIsloggedIn(result)
        })
        .catch(async (error) => {
            console.error("Validation failed", error)
            try {
                console.log("Refreshing accToken")
                const newToken = await refreshTokenMutation(refToken)
                console.log("new token: ", newToken)
                setSessionStorage(newToken.access)

                const retryValidation = await validateAccessTokenMutation(
                    newToken.access
                )
                console.log("Retry validation: ", retryValidation)
                setIsloggedIn(retryValidation)
            } catch (refreshError) {
                console.error("Refresh failed", refreshError)
                navigate("/")
            }
            console.log("failed yo")
        })

    if (!isLoggedIn) {
        return null
    }

    return (
        <>
            <AccountHeader />
            <Outlet />
            <Footer />
        </>
    )
}
