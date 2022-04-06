import React from 'react';

const MensList = ({ id, name, thumbnail_url }) => {
  return (
    <div className="smallList">
      <p>{name}</p> <img className="tShirt" src={thumbnail_url} alt="tShirt" />
    </div>
  );
};

export default MensList;
