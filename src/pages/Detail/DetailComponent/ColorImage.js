import React from 'react';
import '../DetailComponent/ColorImage.scss';
const ColorImage = ({ id, thumbnail_url, registerColor, resetColor }) => {
  const colorChange = () => {
    registerColor(thumbnail_url);
  };
  const resetColorChange = () => {
    resetColor();
  };

  return (
    <div className="detailColorImage">
      <button onMouseEnter={colorChange} onMouseLeave={resetColorChange}>
        <img className="colorImage" src={thumbnail_url} alt="colorImg"></img>
      </button>
    </div>
  );
};

export default ColorImage;
