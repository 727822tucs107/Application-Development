import React, { useState } from 'react';
import './ForgotPasswordPage.css'; // Import the CSS file for styling

function ForgotPasswordPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Popup will disappear after 3 seconds
  };

  return (
    <div className="forgot-password-page">
      <h1>Forgot Password</h1>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <label>Email: <input type="email" name="email" required /></label>
        <button type="submit">Send Reset Link</button>
      </form>
      {showPopup && (
        <div className="popup">
          Reset link sent to your mail! Please check.
        </div>
      )}
    </div>
  );
}

export default ForgotPasswordPage;
