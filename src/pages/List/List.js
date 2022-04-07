import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ItemList from './ItemListComponents/ItemList';
import Select from './SelectBoxComponents/Select';
import './List.scss';

const List = () => {
  const [products, setProducts] = useState([]);

  const location = useLocation();

  const womensList = location.search.split('?')[1].charAt(8);
  const API_URL = `http://10.58.5.51:8000/products/categories${location.search}`;

  const getFetch = () => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.message);
      });
  };

  useEffect(() => {
    getFetch();
  }, [location.search]);

  return (
    <div className="list">
      <div className="pageContainer">
        {womensList < 5 ? <h4>남성니트</h4> : <h4>여성니트</h4>}
        <nav className="nextPage">
          <p className="textArea">
            총 <b>20개</b>의 상품이 있습니다.
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
        <Select />
        <ul className="product">
          {products &&
            products.map((product, idx) => (
              <ItemList key={idx} {...product} idx={idx} />
            ))}
        </ul>
      </div>
    </div>
  );
};
export default List;
