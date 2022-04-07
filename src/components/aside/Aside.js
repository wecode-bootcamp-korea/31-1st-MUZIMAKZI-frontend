import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Aside.scss';

import { Link } from 'react-router-dom';
import './Aside.scss';

const Aside = () => {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/categorylist.json')
      .then(res => res.json())
      .then(data => {
        setCategoryList(data.side);
      });
  }, []);

  const productList = typeId => {
    const queryString = `products/categories?type_id=${typeId}`;
    navigate(queryString);
  };

  return (
    <div className="aside">
      {categoryList?.map(category => {
        return (
          <div className="asideCategory" key={category.category_id}>
            <Link to={`/products/categories/${category.category_id}/types`}>
              <h2 className="categoryName">{category.category_name}</h2>
            </Link>
            <ul className="categoryTypes">
              {category.types?.map(types => {
                return (
                  <li
                    className="categoryType"
                    onClick={() => {
                      productList(types.type_id);
                    }}
                    key={types.type_id}
                  >
                    {types.type_name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Aside;

const CATEGOTY_LIST = [
  {
    id: 0,
    name: '남성복',
    types: [
      { id: 0, name: '남성 니트' },
      { id: 1, name: '남성컷앤소' },
      { id: 2, name: '남성 셔츠' },
      { id: 3, name: '남성 아웃트탑' },
      { id: 4, name: '남성 하의' },
    ],
  },
  {
    id: 1,
    name: '여성복',
    types: [
      { id: 0, name: '여성 니트' },
      { id: 1, name: '여성컷앤소' },
      { id: 2, name: '여성 셔츠 • 원피스' },
      { id: 3, name: '여성 아웃트탑' },
      { id: 4, name: '여성 보텀' },
    ],
  },
  {
    id: 2,
    name: 'MUZI MAKZI',
    types: [{ id: 0, name: '유니섹스 MAKZI' }],
  },
];
