import React from 'react';
import '../DetailComponent/DetailImages.scss';
const DetailImage = ({ thumnail }) => {
  return (
    <div>
      <div className="imageZone">
        <div className="detailImage">
          <img className="mainImage" src={thumnail} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
