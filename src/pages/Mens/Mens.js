import React, { useEffect, useState } from 'react';
import './Mens.scss';
import MensList from './MensComponent/MensList';
import './MensComponent/MensList.scss';
const Mens = () => {
  const [mensListArray, setMensListArray] = useState();

  useEffect(() => {
    fetch('data/mensListData.json')
      .then(res => res.json())
      .then(res => setMensListArray(res))
      .catch(e => console.error(e));
  }, []);

  return (
    <>
      <div className="Mens">
        <div className="main">
          <h5 className="title-h5">남성복</h5>
          <div className="categoryImg_type_a">
            <img
              src="http://image.mujikorea.net/display/corner/202/220323_man_category_img.jpg"
              alt="남성"
            />
          </div>
          <div className="smallImage">
            {mensListArray &&
              mensListArray.map(List => {
                return (
                  <MensList
                    key={List.id}
                    id={List.id}
                    name={List.name}
                    thumbnail={List.thumbnail}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mens;
