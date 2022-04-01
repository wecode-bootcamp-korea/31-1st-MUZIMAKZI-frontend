import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import './List.scss';

const List = () => {
  const [ItemInfo, setItemInfo] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/data/MockData.json')
  //     .then(res => res.json())
  //     .then(data => setItemInfo(data));
  // }, []);

  useEffect(() => {
    fetch('http://10.58.7.79:8000/products/categories/list', {
      method: 'POST',
      body: JSON.stringify({
        type_id: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setItemInfo(data);
      });
    console.log(ItemInfo);
  }, []);

  return (
    <div className="List">
      <div className="container">
        <h4>남성니트</h4>
        <p>
          총 <strong>100개</strong>의 상품이 있습니다.
        </p>
        <div className="selectBox">
          <div className="selectScroll">
            <span class="selectList">컬러</span>
            <span className="selectList">사이즈</span>
            <div className="selectList"></div>
          </div>
          <ul className="selectText">
            <li>
              <b>인기순</b>
            </li>
            <li>
              <b>신상품순</b>
            </li>
            <li>
              <b>낮은가격순</b>
            </li>
            <li>
              <b>높은가격순</b>
            </li>
            <li>추천상품순</li>
          </ul>
          <ul className="selectBtnGroup">
            <li className="imageBtn"></li>
            <li className="imageListBtn"></li>
            <li className="more">50</li>
          </ul>
        </div>
        <div className="ItemList">
          {ItemInfo.map(item => (
            <ItemList key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default List;
