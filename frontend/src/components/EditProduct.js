import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById, updateProduct } from "../services/api";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
    });

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const response = await fetchProductById(id);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        loadProduct();
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, product);
            alert("Product updated successfully!");
            navigate("/products");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={product.title} onChange={handleChange} placeholder="Product Title" required />
                <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
                <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
