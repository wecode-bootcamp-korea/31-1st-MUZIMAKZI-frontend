import React, { useEffect, useState } from 'react';
import './Mens.scss';
import MensList from './MensComponent/MensList';
import './MensComponent/MensList.scss';

const Mens = () => {
  const [mensList, setMensList] = useState();

  useEffect(() => {
    fetch('http://10.58.6.114:8000/products/categories/1/types')
      .then(res => res.json())
      .then(res => {
        setMensList(res.message);
      })
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
              mensList.map((img, index) => {
                return (
                  <MensList
                    key={index}
                    id={img.id}
                    name={img.name}
                    thumbnail_url={img.thumbnail_url}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mens;
