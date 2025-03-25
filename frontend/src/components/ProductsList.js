import React, { useEffect, useState } from "react";
import { fetchProducts, deleteProduct, updateProduct } from "../services/api";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [viewMode, setViewMode] = useState(false);
    const [editedProduct, setEditedProduct] = useState({ title: "", price: "", description: "" });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await fetchProducts();
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await deleteProduct(id);
            loadProducts();
        }
    };

    const handleView = (product) => {
        setSelectedProduct(product);
        setViewMode(true);
        setEditMode(false);
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setEditedProduct(product);
        setEditMode(true);
        setViewMode(false);
    };

    const handleChange = (e) => {
        setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(selectedProduct.id, editedProduct);
        alert("Product updated successfully!");
        loadProducts();
        setEditMode(false);
    };

    return (
        <div>
            <h2>Products List</h2>
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <p>{product.title} - ${product.price}</p>
                    <button onClick={() => handleView(product)}>View</button>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>

                    {/* View Product Details */}
                    {viewMode && selectedProduct?.id === product.id && (
                        <div className="view-details">
                            <p><strong>Title:</strong> {selectedProduct.title}</p>
                            <p><strong>Price:</strong> ${selectedProduct.price}</p>
                            <p><strong>Description:</strong> {selectedProduct.description}</p>
                        </div>
                    )}

                    {/* Edit Product Form */}
                    {editMode && selectedProduct?.id === product.id && (
                        <form onSubmit={handleSubmit} className="edit-form">
                            <input type="text" name="title" value={editedProduct.title} onChange={handleChange} required />
                            <input type="number" name="price" value={editedProduct.price} onChange={handleChange} required />
                            <textarea name="description" value={editedProduct.description} onChange={handleChange} required />
                            <button type="submit">Save Changes</button>
                        </form>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
