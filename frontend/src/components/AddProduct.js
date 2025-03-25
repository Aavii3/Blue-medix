import React, { useState } from "react";
import { createProduct } from "../services/api";

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct({ title, price });
        alert("Product added successfully");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Product Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
