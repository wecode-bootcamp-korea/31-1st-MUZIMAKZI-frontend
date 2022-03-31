import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Mens from './pages/Mens/Mens';
import Womens from './pages/Womens/Womens';
import Landing from './pages/Landing/Landing';
import Labo from './pages/Labo/Labo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/loginsingup" element={<LoginSignup />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/labo" element={<Labo />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
