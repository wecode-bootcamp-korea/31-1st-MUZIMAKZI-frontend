import React from 'react';
import '../DetailComponent/TextInfo.scss';
const TextInfo = ({ price, 배송비 }) => {
  return (
    <div>
      <p className="price">{price}</p>
      <p>{배송비}</p>
    </div>
  );
};

export default TextInfo;
