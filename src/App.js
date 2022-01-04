import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import CategoryPage from 'pages/CategoryPage';
import ProductPage from 'pages/ProductPage';
import CartPage from 'pages/CartPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import AccountPage from 'pages/AccountPage';
import FaqPage from 'pages/FaqPage';
import OurStoryPage from 'pages/OurStoryPage';
import PaymentPage from 'pages/PaymentPage/index.jsx';
import SuccessfulPayment from 'pages/SuccessfulPayment';
import Box from '@material-ui/core/Box';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ScrollToTop from 'helpers/scrollToTop';
import CssBaseline from '@material-ui/core/CssBaseline';
import './fonts/stylesheet.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <CssBaseline />

      <Header />
      <Box minHeight={{ xs: 'calc(100vh - 100px)', md: 'calc(100vh - 370px)' }}>
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
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/successful" element={<SuccessfulPayment />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
