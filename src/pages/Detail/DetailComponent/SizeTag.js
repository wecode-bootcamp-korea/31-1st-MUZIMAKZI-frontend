import React, { useState } from 'react';
import '../DetailComponent/SizeTag.scss';
const SizeTag = ({ id, size }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div>
      <button
        onClick={handleSelect}
        className={`sizeSelect ${isSelected && 'selected'}`}
      >
        {size}
      </button>
    </div>
  );
};

export default SizeTag;
