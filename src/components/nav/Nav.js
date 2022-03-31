import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navBox">
        <div className="navTop">
          <a href="/" className="Logo">
            <span className="muziLogo">MUZI</span>
            <img
              src="images/nav/MUZISIDE.png"
              alt="SideLogoImg"
              className="SideLogoImg"
            />
          </a>
          <div className="navSearch">
            <input className="searchInput" type="text" />
            <img src="/images/nav/searchIcon.png" alt="searchIconImg" />
          </div>
          <div className="linkItem">
            <a href="/sign">
              <button type="button" className="btnLogin" />
            </a>
            <Link to="/">
              <button type="button" className="btnMypage" />
            </Link>
            <Link to="/">
              <button type="button" className="btnCart" src="/" />
            </Link>
          </div>
        </div>
        <div className="navBottom">
          <ul className="inner">
            {INNERS.map(inner => (
              <li key={inner.id}>
                <Link to={inner.url} title={inner.value}>
                  {inner.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const INNERS = [
  {
    id: '1',
    url: '/',
    value: '인기상품',
  },
  {
    id: '2',
    url: '/',
    value: '신상품',
  },
  {
    id: '3',
    url: '/',
    value: '온라인 한정사이즈',
  },
  {
    id: '4',
    url: '/',
    value: '가격 인하',
  },
  {
    id: '5',
    url: '/',
    value: '기간 한정',
  },
  {
    id: '6',
    url: '/',
    value: '의복잡화 아울렛',
  },
  {
    id: '7',
    url: '/',
    value: '생활잡화 아울렛',
  },
];
