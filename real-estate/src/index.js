import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WishlistProvider from './context/WishlistContext';
import './index.css'; // Import your global styles if any

ReactDOM.render(
  <React.StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
