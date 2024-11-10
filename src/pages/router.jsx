import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import PageNotFound from "./PageNotFound.jsx";
import Home from "./Home/Home.jsx";
import ProtectedRoute from "../layouts/ProtectedRoute.jsx";
import Spaces from "./Spaces/AllSpaces/Spaces.jsx";
import SingleSpace from "./Spaces/SingleSpace/SIngleSpace.jsx";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout/>}>
					<Route path="/" element={<Home/>}/>
					<Route path="*" element={<PageNotFound/>}/>
				</Route>
				<Route element={<ProtectedRoute/>}>
					<Route path="/account" element={<h1>Protected</h1>}/>
					<Route path="/spaces" element={<Spaces/>}/>
					<Route path="/space" element={<SingleSpace/>}/>
				</Route>

			</Routes>
		</BrowserRouter>
	);
}