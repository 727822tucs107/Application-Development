import React from 'react';
import './AboutUsPage.css'; // Import the CSS file for styling

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>Welcome to our Real Estate Management Company. We are dedicated to providing exceptional real estate services and helping our clients find their dream properties.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to offer top-notch real estate solutions that cater to the unique needs of each client. We strive to make the process of buying, selling, and managing properties as smooth and efficient as possible.</p>
      <h2>Our Values</h2>
      <ul>
        <li>Integrity: We adhere to the highest ethical standards.</li>
        <li>Customer Focus: We prioritize our clients' needs and satisfaction.</li>
        <li>Innovation: We continuously seek innovative solutions to enhance our services.</li>
        <li>Excellence: We are committed to excellence in every aspect of our business.</li>
      </ul>
    </div>
  );
}

export default AboutUsPage;
