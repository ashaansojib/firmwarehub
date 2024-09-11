import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Aside from "../shared/Aside";
import Footer from "../shared/Footer";

const Main = () => {
  return (
    <main>
      <Header />
      <div className="bg-primary">
        <div className="home-container">
          <div className="p-2 md:p-0 sticky top-0 left-0 h-full">
            <Aside />
          </div>
          <div className="w-full p-2 md:p-0">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
