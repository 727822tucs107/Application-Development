import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map((item, index) => (
          <li key={index}>
            <img
              src={require(`../assets/${item.image}`).default}
              alt={item.name}
              style={{ width: '100px', height: '100px' }}
            />
            {item.name}
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
