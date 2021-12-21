import React from 'react';
import MainPage from 'pages/MainPage';
import CategoryPage from 'pages/CategoryPage';
import { Routes, Route } from 'react-router-dom';
import ProductPage from 'pages/ProductPage';
import CartPage from 'pages/CartPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import AccountPage from 'pages/AccountPage';

function App() {
  return (
    <div style={{ minHeight: 'calc(100vh - 280px)' }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
