import React from 'react';
import './Settings.css';

function Settings() {
  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="siteTitle">Site Title</label>
          <input type="text" id="siteTitle" name="siteTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="adminEmail">Admin Email</label>
          <input type="email" id="adminEmail" name="adminEmail" />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
