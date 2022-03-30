import React from 'react';

const MensList = ({ id, name, thumbnail }) => {
  return (
    <div className="small-list">
      <p>{name}</p> <img src={thumbnail}></img>
    </div>
  );
};

export default MensList;
