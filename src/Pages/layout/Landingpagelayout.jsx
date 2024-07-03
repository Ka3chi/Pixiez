import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../compiler";

const Layout = () => {
  return (
    <>
      <Header />

        <Outlet className="overflow-y-hidden"/>
      
      <Footer />
    </>
  );
};

export default Layout;
