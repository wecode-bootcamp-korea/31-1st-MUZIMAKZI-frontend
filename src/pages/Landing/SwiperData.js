import React from 'react';
// import SwiperItems from './SwiperItems';

const SwiperData = ({ id, img_url, title }) => {
  return (
    <li key={id}>
      <img src={img_url} alt={title} />
    </li>
  );
};

export default SwiperData;
