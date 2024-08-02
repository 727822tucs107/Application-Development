import React from 'react';
import './Modal.css';

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Feedback Submitted</h3>
        <p>You have submitted your feedback successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
