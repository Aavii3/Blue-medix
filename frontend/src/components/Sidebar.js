import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
    const [showUsersOptions, setShowUsersOptions] = useState(false);
    const [showProductsOptions, setShowProductsOptions] = useState(false);

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <ul>
                {/* Users Section */}
                <li>
                    <button className="sidebar-btn" onClick={() => setShowUsersOptions(!showUsersOptions)}>
                        Users {showUsersOptions ? "▲" : "▼"}
                    </button>
                    {showUsersOptions && (
                        <ul className="submenu">
                            <li><Link to="/users">Users List</Link></li>
                            <li><Link to="/add-user">Add User</Link></li>
                        </ul>
                    )}
                </li>

                {/* Products Section */}
                <li>
                    <button className="sidebar-btn" onClick={() => setShowProductsOptions(!showProductsOptions)}>
                        Products {showProductsOptions ? "▲" : "▼"}
                    </button>
                    {showProductsOptions && (
                        <ul className="submenu">
                            <li><Link to="/products">Products List</Link></li>
                            <li><Link to="/add-product">Add Product</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
