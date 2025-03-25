import React from "react";
import "./Navbar.css";

const Navbar = ({ sidebarOpen, toggleSidebar }) => {
    return (
        <nav className={`navbar ${sidebarOpen ? "shifted" : ""}`}>
            <button className="menu-button" onClick={toggleSidebar}>
                ☰
            </button>
            <img src="/images/logo.png" alt="Logo" className="logo" />
        </nav>
    );
};

export default Navbar;
