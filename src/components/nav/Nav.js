import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const inners = [
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

  const innerList = inners.map(inner => {
    return (
      <li key={inner.id}>
        <Link to={inner.url} title={inner.value}>
          {inner.value}
        </Link>
      </li>
    );
  });

  // {innerList.map(inner => {
  //   return (
  //     <li className='inner'>
  //       id={inner.id}

  //     </li>
  //   )
  // })

  return (
    <nav className="Nav">
      <div className="NavBox">
        <div className="navTop">
          <a href="/" className="Logo">
            {/* //fix a태그 경로  */}
            <span className="muziLogo">MUZI</span>
            <img
              src="images/nav/MUZISIDE.png"
              alt="SideLogoImg"
              className="SideLogoImg"
            />
          </a>
          <div className="navSearch">
            <input className="searchInput" type="text" />
            <img src="/images/nav/searchIcon.png" alt="" />
          </div>
          <div className="linkItem">
            <button type="button" className="btnLogin" src="/" />
            <button type="button" className="btnMypage" src="/" />
            <button type="button" className="btnCart" src="/" />
          </div>
        </div>

        <div className="navBottom">
          <ul className="inner">
            {innerList}
            {/* <li>
              <Link to="/" title="인기상품">
                인기상품
              </Link>
            </li>
            <li>
              <Link to="/" title="신상품">
                신상품
              </Link>
            </li>
            <li>
              <Link to="/" title="온라인 한정사이즈">
                온라인 한정사이즈
              </Link>
            </li>
            <li>
              <Link to="/" title="가격 인하">
                가격 인하
              </Link>
            </li>
            <li>
              <Link to="/" title="기간 한정">
                기간 한정
              </Link>
            </li>
            <li>
              <Link to="/" title="의복잡화 아울렛">
                의복잡화 아울렛
              </Link>
            </li>
            <li>
              <Link to="/" title="생활잡화 아울렛">
                생활잡화 아울렛
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
