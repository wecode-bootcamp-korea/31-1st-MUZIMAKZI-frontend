import React, { useState, useEffect } from 'react';
import '/Users/apple/Desktop/muzimakzi/31-1st-MUZIMAKZI-frontend/src/pages/Detail/DetailComponent/DetailSmallImage.scss';

const DetailSmallImage = ({ id, thumbnail }) => {
  return (
    <div className="detail-small-list">
      <img src={thumbnail}></img>
    </div>
  );
};

export default DetailSmallImage;
