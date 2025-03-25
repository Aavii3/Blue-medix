import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById, updateUser } from "../services/api";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await fetchUserById(id);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        loadUser();
    }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(id, user);
            alert("User updated successfully!");
            navigate("/users");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstname" value={user.firstname} onChange={handleChange} placeholder="First Name" required />
                <input type="text" name="lastname" value={user.lastname} onChange={handleChange} placeholder="Last Name" required />
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default EditUser;
