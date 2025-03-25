Blue-Medix - Healthcare Management System

Project Overview
*Blue-Medix* is a modern **Healthcare Management System** to make hospital administration simpler. It supports effortless management of **users (doctors, patients, staff)** and **products (medicines, medical devices, etc.)** using an intuitive dashboard.

Features
*User Management* - Add User, Edit User, View User, Delete User
*Product Management* - Add Product, Edit Product, View Product, Delete Product
*Interactive Dashboard* - Simple UI with Sidebar Navigation
*API Integration* - Imports real-time data from **FakeStore API**
*Secure & Responsive* - Works on all devices

*Project Structure*
frontend/
│-- public/                 # Static assets
│-- src/
│   │-- components/         # UI Components, reusable (Navbar, Sidebar, Forms)
│   │-- pages/              # Page Components (Dashboard, Users, Products)
│   │-- services/           # API Calls using Axios
│   │-- styles/             # CSS Stylesheets
│   │-- App.js              # Main Component
│   │-- index.js            # Entry Point
│--.gitignore               # Git Ignore Files
│-- package.json            # Dependencies & Scripts
│-- README.md               # Documentation (You're reading it now!)

UI & Components
✔ Navbar: Fixed navbar with sidebar toggle
✔ Sidebar: Collapsible menu with section links
✔ Dashboard: Home page with an overview of users & products
✔ UsersList & ProductsList: Show all users/products with CRUD actions
✔ Forms: Used for creating and editing users/products

Technologies Used
React.js --- Frontend framework
React Router --- Navigation & Routing
Axios --- API calls
CSS --- Styling & Layout
FakeStore API --- Dummy data for users & products
