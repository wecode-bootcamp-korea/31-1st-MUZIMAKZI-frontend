import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
const MensList = ({ men: { name, thumbnail_url, type_id } }) => {
  const navigate = useNavigate();

  const productList = typeId => {
    const queryString = `products/categories?type_id=${typeId}`;
    navigate(queryString);
  };

  return (
    <div
      className="smallList"
      onClick={() => {
        productList(type_id);
      }}
    >
      <Link to={`products/categories?type_id=${type_id}`}>
        <p>{name}</p>
        <img className="tShirt" src={thumbnail_url} alt="tShirt" />
      </Link>
    </div>
  );
};

export default MensList;
