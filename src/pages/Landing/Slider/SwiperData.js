import React from 'react';

const SwiperData = ({ landing_image_url }) => {
  return (
    <li>
      <img src={landing_image_url} alt="autoSlider" />
    </li>
  );
};

export default SwiperData;
