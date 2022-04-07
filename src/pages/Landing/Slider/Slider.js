import React from 'react';
import { useState, useEffect } from 'react';
import SwiperData from '../Slider/SwiperData';
import SliderButton from '../Slider/SliderButton';

const Slider = ({ swiperList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleSlide(currentIndex) {
    if (currentIndex === swiperList.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = swiperList.length - 1;
    }
    setCurrentIndex(currentIndex);
  }

  function handleSwipe(direction) {
    handleSlide(currentIndex + direction);
  }

  useEffect(() => {
    const timeoutId = setTimeout(
      () =>
        setCurrentIndex(currentValue => {
          if (currentValue < swiperList.length - 1) {
            return setCurrentIndex(currentIndex + 1);
          } else {
            return setCurrentIndex(0);
          }
        }),
      2500
    );
    return () => clearTimeout(timeoutId);
  });

  return (
    <div className="sliderArea">
      <div className="slider">
        <SliderButton direction="Prev" onClick={() => handleSwipe(-1)} />
        <SliderButton direction="Next" onClick={() => handleSwipe(1)} />
        <div className="sliderList">
          <div
            className="sliderTrack"
            style={{
              transform: `translateX(${-760 * (0.5 + currentIndex)}px)`,
            }}
          >
            {swiperList &&
              swiperList.map((swiperImg, idx) => {
                return <SwiperData key={idx} {...swiperImg} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
