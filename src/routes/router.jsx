import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Dashboard from "../layout/Dashboard";
import SPDTools from "../pages/tools/SPDTools";
import SpTools from "../pages/tools/SpTools";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/spd-tools",
                element: <SPDTools />
            },
            {
                path: "/sp-tools",
                element: <SpTools />
            }
        ]
    },
    {
        path: "/dash/admin",
        element: <Dashboard />
    }, {
        path: "*",
        element: <p>Go back</p>
    }
]);
export default router;