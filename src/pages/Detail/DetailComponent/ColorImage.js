import React from 'react';
import '../DetailComponent/ColorImage.scss';
const ColorImage = ({ id, thumbnail }) => {
  return (
    <div className="detailColorImage">
      <img src={thumbnail}></img>
    </div>
  );
};

export default ColorImage;
