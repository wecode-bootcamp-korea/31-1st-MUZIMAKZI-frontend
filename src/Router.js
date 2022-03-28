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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/DetailPage" element={<DetailPage />} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MensWear" element={<MensWear />} />
        <Route path="/WomenSwear" element={<WomensWear />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
