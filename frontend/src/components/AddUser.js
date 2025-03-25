import React, { useState } from "react";
import { createUser } from "../services/api";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser({ name, email });
    alert("User added successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
