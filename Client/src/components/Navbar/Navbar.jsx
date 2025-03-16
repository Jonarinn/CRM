import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-div">
                <Link to="/">
                    <img src={Logo} className="nav-logo" />
                </Link>
                <Link to="/">
                    <h1 className="nav-text-logo">Overtake</h1>
                </Link>
            </div>
            <div>
                <ul className="navigation-list">
                    <li className="secondary-button">Login</li>
                    <li className="cta-button">Sign Up</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
