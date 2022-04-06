import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemList from './ItemListComponents/ItemList';
import SelectBox from './SelectBoxComponents/SelectBox';
import './List.scss';

const List = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log('로케이션:', location);

  // TODO : MOCK 데이터
  // useEffect(() => {
  //   fetch('/data/MockData.json')
  //     .then(res => res.json())
  //     .then(data => setProducts(data));
  // }, []);

  // const API_URL = 'http://127.0.0.1:8000/products/${location.search}';
  const API_URL = `http://10.58.1.246:8000/products/categories${location.search}`;

  const getFetch = () => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.message);
      });
  };

  useEffect(() => {
    getFetch();
    console.log(products);
  }, [location.search]);

  const updateParams = param => {
    navigate(`/products/categories${location.search}${param}`);
  };
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
        <SelectBox updateParams={updateParams} />
        <ul className="product">
          {products &&
            products.map(product => <ItemList key={product.id} {...product} />)}
        </ul>
      </div>
    </div>
  );
};
export default List;
