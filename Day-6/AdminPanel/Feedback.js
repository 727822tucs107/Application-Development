import React, { useState } from 'react';
import './Feedback.css';

const emojis = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
  '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚'
];

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [rating, setRating] = useState(0);

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setFeedback(feedback + emoji);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic

    // Show popup confirmation
    alert('You have submitted your feedback successfully!');
    setFeedback(''); // Clear the feedback form
    setRating(0); // Reset the rating
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="emoji-picker">
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className="emoji"
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
        <label>
          Your Feedback:
          <textarea
            value={feedback}
            onChange={handleChange}
            placeholder="Type your feedback here..."
          />
        </label>
        <div className="rating">
          <span>Rating For Real-Estate Management - </span>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? 'filled' : ''}`}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
