import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../services/api";

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await fetchUserById(id);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        loadUser();
    }, [id]);

    if (!user) return <p>Loading user details...</p>;

    return (
        <div>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {user.firstname} {user.lastname}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
        </div>
    );
};

export default UserDetails;
