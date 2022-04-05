import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

const Aside = () => {
  const [categoryList, setCategoryList] = useState(0);

  useEffect(() => {
    fetch('data/categorylist.json')
      .then(res => res.json())
      .then(data => {
        setCategoryList(data);
      });
  }, []);

  return (
    <div className="aside">
      {categoryList.map(category => {
        return (
          <div className="asideCategory" key={category.id}>
            <h2 className="categoryName">
              <Link to={`${category.linkurl}`}>{category.name}</Link>
            </h2>
            <ul className="categoryTypes">
              {category.types.map(types => {
                return (
                  <li className="categoryType" key={types.id}>
                    <Link to={`category=${types.id}`} className="typeLink">
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
