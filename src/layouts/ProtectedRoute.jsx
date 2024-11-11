import {Outlet, useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AccountHeader from "../components/AccountHeader.jsx";

export default function ProtectedRoute() {
	const loginPage = "/login";
	const isLoggedIn = true

	const navigate = useNavigate();

	if (!isLoggedIn) {
		navigate(loginPage);
	} else {
		return (
			<>
				<AccountHeader/>
				<Outlet/>
				<Footer/>
			</>
		)
	}
}