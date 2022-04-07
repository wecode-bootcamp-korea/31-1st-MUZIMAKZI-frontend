import React, { useState } from 'react';
import '../DetailComponent/SizeTag.scss';
const SizeTag = ({ id, thumbnail }) => {
  return (
    <div>
      <button>
        <img id="sizeTag" src={thumbnail} alt=""></img>
      </button>
    </div>
  );
};

export default SizeTag;
