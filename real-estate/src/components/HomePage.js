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
    <div className="home-page">
      <div className="hero-section" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <h1>Welcome to Real Estate Management</h1>
        <p>Your one-stop solution for managing real estate properties.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search properties..." />
          <button type="button">Search</button>
        </div>
      </div>
      <div className="info-section services-section">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUvLgbsDnHW7WH7POUCLSRP-V9QBXag2YNw&s" 
          alt="Our Service"
          className="service-image bounce"
        />
        <div className="services-description">
          <h2>Our Services</h2>
          <p>We provide a wide range of services to help you manage your real estate needs. From buying and selling properties to renting and leasing, we've got you covered.</p>
        </div>
      </div>
      <div className="info-section featured-listings-section">
        <div className="featured-description">
          <h2>Featured Listings</h2>
          <p>Explore our featured listings to find your dream home. Our listings include a variety of properties that suit different tastes and budgets.</p>
        </div>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH59WQ0J7lrI2Qzs3iz0mFnU1yT_IXbDFog&s" 
          alt="Featured Listings"
          className="featured-image bounce"
        />
      </div>
      <div className="info-section about-us-section">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDbifSyVnX8E2ZSiCmC09bDH1xorr2RTdow&s" 
          alt="About Us"
          className="about-us-image bounce"
        />
        <div className="about-us-description">
          <h2>About Us</h2>
          <p>Learn more about our company, our mission, and our values. We are dedicated to providing exceptional real estate services and helping our clients find their dream properties.</p>
        </div>
      </div>
      <div className="info-section contact-us-section">
        <div className="contact-us-description">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, feel free to reach out to us. We are here to help you with all your real estate needs.</p>
        </div>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR374DqSk9OaxMk0QwVZdjDqInX3RT-qM0Pqw&s" 
          alt="Contact Us"
          className="contact-us-image bounce"
        />
      </div>
    </div>
  );
}

export default HomePage;
