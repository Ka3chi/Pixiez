import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../compiler";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="p-0 m-0"> 
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
