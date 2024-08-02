import React, { useState } from 'react';
import './ProfilePage.css'; // Import the CSS file for styling

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  // Dummy data for demonstration
  const [user, setUser] = useState({
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
  });

  const profilePicture = "https://cdn-icons-png.flaticon.com/512/5087/5087579.png";

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSaveClick = () => {
    // Implement save logic here (e.g., send updated data to server)
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-image">
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <div className="buttons-container">
            <button className="edit-button" onClick={handleEditClick}>
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            {isEditing && (
              <button className="save-button" onClick={handleSaveClick}>
                Save
              </button>
            )}
          </div>
          <div className="profile-details">
            <div className="profile-column">
              <div className="profile-field">
                <label>Certifications:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="certifications"
                    value={user.certifications}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{user.certifications}</p>
                )}
              </div>
              <div className="profile-field">
                <label>Qualifications:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="qualifications"
                    value={user.qualifications}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{user.qualifications}</p>
                )}
              </div>
              <div className="profile-field">
                <label>Address:</label>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="addressLine1"
                      value={user.addressLine1}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="addressLine2"
                      value={user.addressLine2}
                      onChange={handleInputChange}
                    />
                  </>
                ) : (
                  <>
                    <p>{user.addressLine1}</p>
                    <p>{user.addressLine2}</p>
                  </>
                )}
              </div>
              <div className="profile-field">
                <label>Postcode:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="postcode"
                    value={user.postcode}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{user.postcode}</p>
                )}
              </div>
            </div>
            <div className="profile-column">
              <div className="profile-field">
                <label>State:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="state"
                    value={user.state}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{user.state}</p>
                )}
              </div>
              <div className="profile-field">
                <label>Area:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="area"
                    value={user.area}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{user.area}</p>
                )}
              </div>
              <div className="profile-field">
                <label>Email:</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{user.email}</p>
                )}
              </div>
              <div className="profile-field">
                <label>Education:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="education"
                    value={user.education}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{user.education}</p>
                )}
              </div>
              <div className="profile-field">
                <label>Country:</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={user.country}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{user.country}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
