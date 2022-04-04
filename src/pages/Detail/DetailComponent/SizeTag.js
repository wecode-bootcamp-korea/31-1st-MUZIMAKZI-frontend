import React from 'react';
import '../DetailComponent/SizeTag.scss';
const SizeTag = ({ id, thumbnail }) => {
  return (
    <div>
      <img id="sizeTag" src={thumbnail} alt=""></img>
    </div>
  );
};

export default SizeTag;
