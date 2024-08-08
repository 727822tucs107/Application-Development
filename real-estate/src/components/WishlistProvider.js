import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WishlistProvider } from './context/WishlistContext'; // Correct import path
import WishlistPage from './components/WishlistPage';
// Other imports...

const App = () => {
  return (
    <WishlistProvider>
      <Router>
        <Switch>
          <Route path="/wishlist" component={WishlistPage} />
          {/* Other routes... */}
        </Switch>
      </Router>
    </WishlistProvider>
  );
};

export default App;
