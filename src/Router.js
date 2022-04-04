import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Login from './pages/LoginSignup/Login/Login';
import Signup from './pages/LoginSignup/Signup/Signup';
import Mens from './pages/Mens/Mens';
import Womens from './pages/Womens/Womens';
import Landing from './pages/Landing/Landing';
import Labo from './pages/Labo/Labo';
//임시된거라 push할땐 지워야함
import Aside from './components/aside/Aside';
import Nav from './components/nav/Nav';
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="mainContainer">
        <Aside />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/labo" element={<Labo />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Router;
