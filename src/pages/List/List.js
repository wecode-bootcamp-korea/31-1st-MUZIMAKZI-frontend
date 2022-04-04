import React, { useEffect, useState } from 'react';
import ItemList from './ItemListComponents/ItemList';
import SelectBox from './selectBoxComponents/selectBox';
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
        <SelectBox />
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
