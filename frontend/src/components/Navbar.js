import React from "react";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar">
            <button className="menu-button" onClick={toggleSidebar}>
                ☰
            </button>
            <div className="nav-center">
                <img src="/images/logo.png" alt="Logo" className="logo" />
            </div>
        </nav>
    );
};

export default Navbar;
