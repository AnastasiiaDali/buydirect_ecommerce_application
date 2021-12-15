import React from 'react';
import MainPage from 'pages/MainPage';
import CategoryPage from 'pages/CategoryPage';
import { Routes, Route } from 'react-router-dom';
import ProductPage from 'pages/ProductPage';

function App() {
  return (
    <div style={{ minHeight: 'calc(100vh - 280px)' }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
