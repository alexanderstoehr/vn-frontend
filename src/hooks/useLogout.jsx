import { useNavigate } from "react-router-dom"

export default function useLogout() {
    const navigate = useNavigate()
    return function logout() {
        console.log("Logging out...")
        localStorage.removeItem("vrt")
        sessionStorage.removeItem("vud")
        navigate("/")
    }
}
