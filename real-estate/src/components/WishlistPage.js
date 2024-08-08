import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
