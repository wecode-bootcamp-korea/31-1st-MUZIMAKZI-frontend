import React, { useEffect, useState } from 'react';
import './Mens.scss';
import MensList from './MensComponent/MensList';
import './MensComponent/MensList.scss';

const Mens = () => {
  const [mensList, setMensList] = useState();

  useEffect(() => {
    fetch('data/mensListData.json')
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
                return (
                  <MensList
                    key={id}
                    id={id}
                    name={name}
                    thumbnail={thumbnail}
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
