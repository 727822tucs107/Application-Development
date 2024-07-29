import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import CategoryPage from './components/CategoryPage';
import ContactPage from './components/ContactPage';
import ProfilePage from './components/ProfilePage';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AboutUsPage from './components/AboutUsPage';
import CategoryDetailsPage from './components/CategoryDetailsPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import UserPanel from './components/UserPanel/UserPanel'; // Import UserPanel
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/category/:categoryId" element={<CategoryDetailsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin-panel/*" element={<AdminPanel />} />
            <Route path="/user-panel/*" element={<UserPanel />} /> {/* Add UserPanel route */}
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
