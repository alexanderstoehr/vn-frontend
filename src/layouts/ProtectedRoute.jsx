import {Outlet, useNavigate} from "react-router-dom";

export default function ProtectedRoute() {
    const loginPage = "/login";
    const isLoggedIn = false

    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate(loginPage);
    } else {
        return <Outlet/>
    }
}