import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ListPage from './pages/ListPage/ListPage';
import Login from './pages/LoginSignup/Login/Login';
import Signup from './pages/LoginSignup/Signup/Signup';
import MensWear from './pages/MensWear/MensWear';
import WomensWear from './pages/WomensWear/WomensWear';
import LandingPage from './pages/LandingPage/LandingPage';
import MuziLabo from './pages/MuziLabo/MuziLabo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mens-wear" element={<MensWear />} />
        <Route path="/womens-wear" element={<WomensWear />} />
        <Route path="/muzi-labo" element={<MuziLabo />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
