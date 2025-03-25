import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <ul>
                <li><a href="#users">Users</a></li>
                <li><a href="#products">Products</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
