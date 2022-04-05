import React, { useEffect, useState } from 'react';
import ItemList from './ItemListComponents/ItemList';
import SelectBox from './SelectBoxComponents/SelectBox';
import './List.scss';

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/MockData.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="list">
      <div className="pageContainer">
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
        <ul className="product">
          {products.map(product => (
            <ItemList key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default List;
