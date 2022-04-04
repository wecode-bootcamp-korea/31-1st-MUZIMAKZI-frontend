import React from 'react';
import '../DetailComponent/TextInfo.scss';

const TextInfo = ({ id, name, price, size, color, description }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{size[0]}</p>
      <p>{color[0]}</p>
      <p>{description}</p>
    </div>
  );
};

export default TextInfo;
