import React, { useEffect, useState } from 'react';
import '../DetailComponent/SizeTag.scss';
const SizeTag = ({ id, arr, index, thumbnail, toggle }) => {
  const toggleSize = () => {
    toggle(index);
  };

  return (
    <button onClick={toggleSize}>
      <img
        styles={{
          borderColor: arr ? 'red' : 'gray',
        }}
        id="sizeTag"
        src={thumbnail}
        alt=""
      ></img>
    </button>
  );
};

export default SizeTag;
