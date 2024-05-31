import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../compiler";

const Layout = () => {
    return (
        <div>
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}

export default Layout