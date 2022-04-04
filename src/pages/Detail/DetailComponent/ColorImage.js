import React, { useState } from 'react';
import '../DetailComponent/ColorImage.scss';
const ColorImage = ({ id, thumbnail }) => {
  const [colorChange, setColorChange] = useState(false);

  return (
    <div className="detailColorImage">
      <img id="colorImage" src={thumbnail} alt=""></img>
    </div>
  );
};

export default ColorImage;
