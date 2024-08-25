import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Dashboard from "../layout/Dashboard";
import SPDTools from "../pages/tools/SPDTools";
import SpTools from "../pages/tools/SpTools";
import Downloads from "../pages/download/Downloads";
import Blogs from "../pages/blogs/Blogs";

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
                path: "/download/:id",
                element: <Downloads />
            },
            {
                path: "/spd-tools",
                element: <SPDTools />
            },
            {
                path: "/sp-tools",
                element: <SpTools />
            },
            {
                path: "/blogs",
                element: <Blogs />
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