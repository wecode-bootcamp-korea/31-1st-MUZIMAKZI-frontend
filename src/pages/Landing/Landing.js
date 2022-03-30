import React from 'react';
import { useState, useEffect } from 'react';
import SwiperData from './SwiperData';
import './Landing.scss';

const Landing = () => {
  const [swiperList, setSwiperList] = useState([]);
  const [swiper, setSwiper] = useState(swiperList[0]);
  useEffect(() => {
    fetch('data/swiperItems.json')
      .then(res => res.json())
      .then(data => setSwiperList(data));
  }, []);

  return (
    <ul className="landingImg">
      {swiperList.map(imgList => {
        return <SwiperData key={imgList.id} {...imgList} />;
      })}
    </ul>
  );
};

export default Landing;
