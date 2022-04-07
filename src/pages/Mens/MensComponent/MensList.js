import React from 'react';

const MensList = ({ name, thumbnail }) => {
  return (
    <div className="smallList">
      <p>{name}</p> <img className="tShirt" src={thumbnail} alt="tShirt" />
    </div>
  );
};

export default MensList;
