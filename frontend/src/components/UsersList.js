import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser, updateUser } from "../services/api";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [viewMode, setViewMode] = useState(false);
    const [editedUser, setEditedUser] = useState({ firstname: "", lastname: "", email: "" });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const response = await fetchUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            await deleteUser(id);
            loadUsers();
        }
    };

    const handleView = (user) => {
        setSelectedUser(user);
        setViewMode(true);
        setEditMode(false);
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setEditedUser(user);
        setEditMode(true);
        setViewMode(false);
    };

    const handleChange = (e) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(selectedUser.id, editedUser);
        alert("User updated successfully!");
        loadUsers();
        setEditMode(false);
    };

    return (
        <div>
            <h2>Users List</h2>
            {users.map((user) => (
                <div key={user.id} className="user-item">
                    <p>{user.firstname} {user.lastname} - {user.email}</p>
                    <button onClick={() => handleView(user)}>View</button>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>

                    {/* View User Details */}
                    {viewMode && selectedUser?.id === user.id && (
                        <div className="view-details">
                            <p><strong>Name:</strong> {selectedUser.firstname} {selectedUser.lastname}</p>
                            <p><strong>Email:</strong> {selectedUser.email}</p>
                            <p><strong>Phone:</strong> {selectedUser.phone}</p>
                        </div>
                    )}

                    {/* Edit User Form */}
                    {editMode && selectedUser?.id === user.id && (
                        <form onSubmit={handleSubmit} className="edit-form">
                            <input type="text" name="firstname" value={editedUser.firstname} onChange={handleChange} required />
                            <input type="text" name="lastname" value={editedUser.lastname} onChange={handleChange} required />
                            <input type="email" name="email" value={editedUser.email} onChange={handleChange} required />
                            <button type="submit">Save Changes</button>
                        </form>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UsersList;
