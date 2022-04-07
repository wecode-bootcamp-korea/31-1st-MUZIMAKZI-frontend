import React, { useState } from 'react';
import '../DetailComponent/ColorImage.scss';
const ColorImage = ({ id, thumbnail }) => {
  return (
    <div className="detailColorImage">
      <img className="colorImage" src={thumbnail} alt=""></img>
    </div>
  );
};

export default ColorImage;
