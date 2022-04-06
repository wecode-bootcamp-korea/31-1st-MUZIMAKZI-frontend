import React, { useState } from 'react';
import '../DetailComponent/SizeTag.scss';
const SizeTag = ({ id, thumbnail }) => {
  const [data, setData] = useState();
  const [sizes, setSizes] = useState(null);

  const onHandleToggle = index => {
    const newSize = [false, false, false, false, false];
    newSize[index] = true;

    setSizes(newSize);
  };

  return (
    <div>
      <button>
        <img id="sizeTag" src={thumbnail} alt=""></img>
      </button>
    </div>
  );
};

export default SizeTag;
