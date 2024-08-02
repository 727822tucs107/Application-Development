// src/components/Product.js
import React from 'react';
import { useWishlist } from '../context/WishlistContext';

const Product = ({ product }) => {
    const { addToWishlist } = useWishlist();

    return (
        <div>
            <h3>{product.name}</h3>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
        </div>
    );
};

export default Product;
