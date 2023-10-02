import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="app">
        <SideBar />
      </div>
      <div className="content alsdkfasldfj">
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
