import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Dashboard from "../layout/Dashboard";
import SPDTools from "../pages/tools/SPDTools";
import SpTools from "../pages/tools/SpTools";
import Downloads from "../pages/download/Downloads";
import Blogs from "../pages/blogs/Blogs";
import Posts from "../pages/dashboard/firmwares/Posts";
import ErrorPage from "../shared/ErrorPage";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import PrivetRoute from "./PrivetRoute";
import ManagePost from "../pages/dashboard/firmwares/ManagePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/page/:filename",
        element: <Downloads />,
        loader: ({ params }) =>
          fetch(`http://localhost:9988/api/firmwares/${params.filename}`),
      },
      {
        path: "/spd-tools",
        element: <SPDTools />,
      },
      {
        path: "/sp-tools",
        element: <SpTools />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),
    children: [
      {
        path: "/admin/posts",
        element: <Posts />,
      },
      {
        path: "/admin/manage-post",
        element: <ManagePost />,
      },
    ],
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
