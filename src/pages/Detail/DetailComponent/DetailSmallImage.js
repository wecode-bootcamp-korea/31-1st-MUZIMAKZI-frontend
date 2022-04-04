import React, { useState } from 'react';
import '../DetailComponent/DetailSmallImage.scss';
const DetailSmallImage = ({ id, thumbnail, registerImage }) => {
  const submitThumnail = () => {
    registerImage(thumbnail);
  };

  return (
    <button onClick={submitThumnail}>
      <img className="detailSmallList" src={thumbnail} alt="" />
    </button>
  );
};

export default DetailSmallImage;
