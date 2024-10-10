import { lazy, Suspense } from "react";
import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/app/protected-route";


const appRoutes = (
    <Route path="/" element={<ProtectedRoute/>}>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="settings" element={<Settings />} /> */}
    </Route>
)

const routes = createRoutesFromElements(appRoutes)
const Router = createBrowserRouter(routes);

export default Router;