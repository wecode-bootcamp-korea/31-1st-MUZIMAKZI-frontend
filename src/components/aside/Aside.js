import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Aside.scss';

const Aside = () => {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://10.58.1.246:8000/main')
      .then(res => res.json())
      .then(data => {
        setCategoryList(data.side_info);
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
