import React, { useState } from 'react';
import '../DetailComponent/DetailSmallImage.scss';
const DetailSmallImage = ({ id, thumbnail }) => {
  return (
    <div className="detailSmallList">
      <img src={thumbnail} alt="" />
    </div>
  );
};

export default DetailSmallImage;
