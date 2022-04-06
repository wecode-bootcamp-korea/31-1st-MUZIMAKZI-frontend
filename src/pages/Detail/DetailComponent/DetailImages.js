import React from 'react';
import '../DetailComponent/DetailImages.scss';
const DetailImage = ({ thumbnail_url }) => {
  return (
    <div>
      <div className="imageZone">
        <div className="detailImage">
          <img className="mainImage" src={thumbnail_url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
