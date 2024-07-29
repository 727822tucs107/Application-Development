import React from 'react';
import './ProfilePage.css'; // Import the CSS file for styling

function ProfilePage() {
  // Dummy data for demonstration
  const user = {
    name: 'Madhumithaa E',
    certifications: 'Certified Real Estate Agent',
    qualifications: 'Bachelor of Business Administration',
    addressLine1: '123 Main Street',
    addressLine2: 'Apt 4B',
    postcode: '12345',
    state: 'TamilNadu',
    area: 'Downtown',
    email: 'madhu@gmail.com',
    education: 'Harvard University',
    country: 'USA',
    state: 'New York'
  };

  const profilePicture = "https://cdn-icons-png.flaticon.com/512/5087/5087579.png";

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-image">
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <div className="profile-details">
            <div className="profile-column">
              <div className="profile-field">
                <label>Certifications:</label>
                <p>{user.certifications}</p>
              </div>
              <div className="profile-field">
                <label>Qualifications:</label>
                <p>{user.qualifications}</p>
              </div>
              <div className="profile-field">
                <label>Address:</label>
                <p>{user.addressLine1}</p>
                <p>{user.addressLine2}</p>
              </div>
              <div className="profile-field">
                <label>Postcode:</label>
                <p>{user.postcode}</p>
              </div>
            </div>
            <div className="profile-column">
              <div className="profile-field">
                <label>State:</label>
                <p>{user.state}</p>
              </div>
              <div className="profile-field">
                <label>Area:</label>
                <p>{user.area}</p>
              </div>
              <div className="profile-field">
                <label>Email:</label>
                <p>{user.email}</p>
              </div>
              <div className="profile-field">
                <label>Education:</label>
                <p>{user.education}</p>
              </div>
              <div className="profile-field">
                <label>Country:</label>
                <p>{user.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
