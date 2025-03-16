import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "../App.css";

/** The main layout for the app
 *
 * This layout will wrap the entire app and use a RRD Outlet to display the unique
 * pages. It will have the default Navigation bar at the top and perhaps a footer.
 *
 * @returns The main layout
 */
const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default AppLayout;
