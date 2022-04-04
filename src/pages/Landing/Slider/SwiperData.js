import React from 'react';

const SwiperData = ({ img_url }) => {
  return (
    <li>
      <img src={img_url} alt="autoSlider" />
    </li>
  );
};

export default SwiperData;
