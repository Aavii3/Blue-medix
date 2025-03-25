import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import "./styles/style.css";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Router>
            <div className="app">
                <Sidebar isOpen={sidebarOpen} />
                <div className="main-content">
                    <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/users" element={<UsersList />} />
                            <Route path="/add-user" element={<AddUser />} />
                            <Route path="/products" element={<ProductsList />} />
                            <Route path="/add-product" element={<AddProduct />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
