import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/api";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const response = await fetchProductById(id);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        loadProduct();
    }, [id]);

    if (!product) return <p>Loading product details...</p>;

    return (
        <div>
            <h2>Product Details</h2>
            <p><strong>Title:</strong> {product.title}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
        </div>
    );
};

export default ProductDetails;
