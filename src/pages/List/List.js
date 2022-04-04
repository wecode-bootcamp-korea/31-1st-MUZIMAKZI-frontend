import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './List.scss';

const List = () => {
  const [ItemInfo, setItemInfo] = useState([]);

  //백엔드 데이터 정보
  // useEffect(() => {
  //   fetch('http://10.58.7.79:8000/products/categories/list', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       type_id: 1,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setItemInfo(data.message);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/MockData.json')
      .then(res => res.json())
      .then(data => setItemInfo(data));
  }, []);

  return (
    <div className="list">
      <div className="container">
        <h4>남성니트</h4>
        <nav className="nextPage">
          <p className="textArea">
            총 <b>131개</b>의 상품이 있습니다.
          </p>
          <ul>
            <li className="btnPageL">
              <img src="/images/listpage/btn_first_dim.gif" alt="button" />
            </li>
            <li className="btnPageL">
              <img src="/images/listpage/btn_prev_dim.gif" alt="button" />
            </li>
            <li>
              <strong>1</strong>
            </li>
            <li className="btnPageR">
              <img src="/images/listpage/btn_next_dim.gif" alt="button" />
            </li>
            <li className="btnPageR">
              <img src="/images/listpage/btn_last_dim.gif" alt="button" />
            </li>
          </ul>
        </nav>
        <div className="selectBox">
          <ul className="selectText">
            <li className="selectFir">전체</li>
            <li className="selectList">온라인 한정 사이즈</li>
            <li className="selectList">무료배송</li>
            <li className="selectRed">SALE</li>
            <li className="selectList">품절</li>
            <li className="selectList">낮은가격</li>
            <li className="selectList">높은가격</li>
          </ul>
          <ul className="selectBtnGroup">
            <li className="imageBtn"></li>
            <li className="imageListBtn"></li>
            <li className="more">50</li>
          </ul>
        </div>
        <ul className="itemBox">
          {ItemInfo.map(item => (
            <ItemList key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default List;

const SELECTTEXT_DATA = [
  {
    id: 1,
    list: '전체',
  },
  {
    id: 2,
    list: '온라인 한정 사이즈',
  },
  {
    id: 3,
    list: '무료배송',
  },
  {
    id: 4,
    list: 'SALE',
  },
  {
    id: 5,
    list: '품절',
  },
  {
    id: 6,
    list: '낮은가격',
  },
  {
    id: 7,
    list: '높은가격',
  },
];
