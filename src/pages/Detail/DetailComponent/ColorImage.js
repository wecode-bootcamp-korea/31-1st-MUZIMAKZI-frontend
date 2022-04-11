import React from 'react';
import '../DetailComponent/ColorImage.scss';

const ColorImage = ({
  id,
  colorSelect,
  color,
  setColorSelect,
  setColorSelectId,
}) => {
  const handleSelect = e => {
    const { value } = e.target;
    setColorSelectId(id + 1);
    setColorSelect(value);
  };

  return (
    <label>
      <input
        type="radio"
        onChange={handleSelect}
        value={color}
        checked={colorSelect === color}
      />
      {color}
    </label>
  );
};

export default ColorImage;
