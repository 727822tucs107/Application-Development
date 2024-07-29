import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Import the CSS file for styling

const images = [
  'https://www.ljhooker.com.au/hubfs/Residential/Blog/A%20Guide%20to%20Preparing%20Your%20Home%20For%20a%20Spring%20Sale.jpg',
  'https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg',
  'https://img.freepik.com/premium-photo/pink-table-with-pink-flowers-vase-pink-wall-with-pink-wall-it_200480-873.jpg',
  'https://st4.depositphotos.com/36879126/38851/i/450/depositphotos_388519480-stock-photo-living-room-wooden-table-lamps.jpg',
  'https://www.homelane.com/blog/wp-content/uploads/2022/04/shutterstock_1067675774.jpg'
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <h1>Welcome to Real Estate Management</h1>
      <p>Your one-stop solution for managing real estate properties.</p>
      <div className="search-bar">
        <input type="text" placeholder="Search properties..." />
        <button type="button">Search</button>
      </div>
    </div>
  );
}

export default HomePage;
