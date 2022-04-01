import React, { useState, useEffect } from 'react';
import '../DetailComponent/DetailSmallImage.scss';

const DetailSmallImage = ({ id, thumbnail }) => {
  return (
    <div className="detailSmallList">
      <img src={thumbnail}></img>
    </div>
  );
};

export default DetailSmallImage;
