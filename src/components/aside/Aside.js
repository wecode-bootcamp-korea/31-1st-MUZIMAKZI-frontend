import React from 'react';

import { Link } from 'react-router-dom';
import './Aside.scss';

const Aside = () => {
  return (
    <div className="aside">
      {CATEGOTY_LIST.map(category => {
        return (
          <div className="asideCategory" key={category.id}>
            <h2 className="categoryName">
              <Link to="/mens">{category.name}</Link>
            </h2>
            <ul className="categoryTypes">
              {category.types.map(types => {
                return (
                  <li className="categoryType" key={types.id}>
                    <Link to="/mens" className="typeLink">
                      {types.name}
                    </Link>
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
