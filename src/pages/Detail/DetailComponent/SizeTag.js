import React from 'react';
import '../DetailComponent/SizeTag.scss';
const SizeTag = ({ size, sizeSelect, setSizeSelect, setSizeSelectId, id }) => {
  const handleSelect = e => {
    const { value } = e.target;
    setSizeSelect(value);
    setSizeSelectId(id + 1);
  };

  return (
    <div>
      <button
        className={`sizeSelect ${sizeSelect === size && 'selected'}`}
        onClick={handleSelect}
        value={size}
      >
        {size}
      </button>
    </div>
  );
};

export default SizeTag;
