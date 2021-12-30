import React from 'react';
import MainPage from 'pages/MainPage';
import CategoryPage from 'pages/CategoryPage';
import { Routes, Route } from 'react-router-dom';
import ProductPage from 'pages/ProductPage';
import CartPage from 'pages/CartPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import AccountPage from 'pages/AccountPage';
import FaqPage from 'pages/FaqPage';
import OurStoryPage from 'pages/OurStoryPage';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/ourstory" element={<OurStoryPage />} />
      </Routes>
      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
