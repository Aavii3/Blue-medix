import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <section id="users">
                <h2>Users</h2>
                <p>List of users will be displayed here.</p>
            </section>

            <section id="products">
                <h2>Products</h2>
                <p>List of products will be displayed here.</p>
            </section>
        </div>
    );
};

export default Dashboard;
