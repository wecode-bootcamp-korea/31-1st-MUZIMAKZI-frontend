import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Mens from './pages/Mens/Mens';
import Womens from './pages/Womens/Womens';
import Landing from './pages/Landing/Landing';
import Labo from './pages/Labo/Labo';
import Nav from './components/nav/Nav';
import Aside from './components/aside/Aside';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="mainContainer">
        <Aside />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="products/categories" element={<List />} />
          <Route path="products/categories/1/types" element={<Mens />} />
          <Route path="products/categories/2/types" element={<Womens />} />
          <Route path="products/categories/3/types" element={<Labo />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Router;
