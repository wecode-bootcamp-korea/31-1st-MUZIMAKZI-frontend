import React from 'react';

const MensList = ({ id, name, thumbnail }) => {
  return (
    <div className="smallList">
      <p>{name}</p> <img src={thumbnail}></img>
    </div>
  );
};

export default MensList;
