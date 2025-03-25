import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./styles/style.css";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="app">
            <Navbar sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <div className="main-container">
                <Sidebar isOpen={sidebarOpen} />
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
