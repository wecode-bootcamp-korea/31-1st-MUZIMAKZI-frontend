import React from 'react';
import '../DetailComponent/SizeTag.scss';
const SizeTag = ({ id, thumbnail }) => {
  return (
    <div>
      <img src={thumbnail}></img>
    </div>
  );
};

export default SizeTag;
