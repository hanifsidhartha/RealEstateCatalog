import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="app">
        <SideBar />
      </div>
      <div className="content">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
