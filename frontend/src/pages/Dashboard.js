import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const [showUsersOptions, setShowUsersOptions] = useState(false);
    const [showProductsOptions, setShowProductsOptions] = useState(false);

    return (
        <div className="dashboard">
            <h2>Welcome to BlueMedix Management</h2>

            {/* Users Section */}
            <div className="section">
                <button onClick={() => setShowUsersOptions(!showUsersOptions)}>
                    Users {showUsersOptions ? "▲" : "▼"}
                </button>
                {showUsersOptions && (
                    <ul>
                        <li><Link to="/users">Users List</Link></li>
                        <li><Link to="/add-user">Add User</Link></li>
                    </ul>
                )}
            </div>

            {/* Products Section */}
            <div className="section">
                <button onClick={() => setShowProductsOptions(!showProductsOptions)}>
                    Products {showProductsOptions ? "▲" : "▼"}
                </button>
                {showProductsOptions && (
                    <ul>
                        <li><Link to="/products">Products List</Link></li>
                        <li><Link to="/add-product">Add Product</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
