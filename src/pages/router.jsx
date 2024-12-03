import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout.jsx"
import PageNotFound from "./PageNotFound.jsx"
import Home from "./Home/Home.jsx"
import ProtectedRoute from "../layouts/ProtectedRoute.jsx"
import AllSpaces from "./Spaces/AllSpaces/AllSpaces.jsx"
import SingleSpace from "./Spaces/SingleSpace/SingleSpace.jsx"
import Video from "./Video/Video.jsx"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="*"
                        element={<PageNotFound />}
                    />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/account"
                        element={<h1>Account</h1>}
                    />
                    <Route
                        path="/spaces"
                        element={<AllSpaces />}
                    />
                    <Route
                        path="/space"
                        element={<SingleSpace />}
                    />
                    <Route
                        path="/video"
                        element={<Video />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
