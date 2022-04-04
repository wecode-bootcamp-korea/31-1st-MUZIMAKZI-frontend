import React from 'react';
// import SwiperItems from './SwiperItems';

const SwiperData = ({ img_url }) => {
  return (
    <li>
      <img src={img_url} alt="autoSlider" />
    </li>
  );
};

export default SwiperData;
