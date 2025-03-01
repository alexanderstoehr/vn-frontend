import { Outlet, useNavigate } from "react-router-dom"
import AccountHeader from "../components/AccountHeader.jsx"
import { Footer } from "flowbite-react"
import { validateAccessTokenMutation } from "../api/mutations/validateAccessTokenMutation.js"
import { useState, useEffect } from "react"
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

    useEffect(() => {
        const validateToken = async () => {
            try {
                const result = await validateAccessTokenMutation(accToken)
                // console.log("Is validated: ", result)
                setIsloggedIn(result)
            } catch (error) {
                console.error("Validation failed", error)
                sessionStorage.removeItem("vud")
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
                    localStorage.removeItem("vrt")
                    navigate("/")
                }
                console.log("Failed auth in ProtectedRoute")
            }
        }

        validateToken()
    }, [accToken, refToken, navigate, setSessionStorage])

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
