import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardAside from "../pages/dashboard/DashboardAside";
import DashboardHeader from "../pages/dashboard/DashboardHeader";
import { AuthContext } from "../auth/AuthProvider";
import ErrorPage from "../shared/ErrorPage";

const Dashboard = () => {
  const router = useLocation();
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user.email === "ashaduzzamansojib67@gmail.com" ? (
        <section className="flex justify-between">
          <DashboardAside />
          <div className="w-full">
            <DashboardHeader />
            {router.pathname === "/admin" ? (
              <h2>Main Dashobad of home</h2>
            ) : (
              <Outlet />
            )}
          </div>
        </section>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Dashboard;
