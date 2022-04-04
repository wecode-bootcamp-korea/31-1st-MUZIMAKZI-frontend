import React from 'react';

const MensList = ({ id, name, thumbnail }) => {
  return (
    <div className="smallList">
      <p>{name}</p> <img className="tShirt" src={thumbnail} alt="" />
    </div>
  );
};

export default MensList;