import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MensList from './MensComponent/MensList';
import './MensComponent/MensList.scss';
import './Mens.scss';

const Mens = () => {
  const [mensList, setMensList] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(fetch(`http://127.0.0.1:8000/products/categories/${params.id}/types`))
      .then(res => res.json())
      .then(res => setMensList(res))
      .catch(e => console.error(e));
  }, []);

  return (
    <div>
      <div className="mens">
        <div className="pageContainer">
          <h5 className="titleH5">남성복</h5>
          <div className="categoryImg">
            <img
              className="mensMainImage"
              src="/images/menswear/mensMainPic.jpg"
              alt="남성"
            />
          </div>
          <div className="smallImage">
            {mensList &&
              mensList.map(({ id, name, thumbnail }) => {
                return <MensList key={id} name={name} thumbnail={thumbnail} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mens;
