import React from 'react';
import { useState } from 'react';
import './Landing.scss';
import Content from './LandingContents/Content';
import Slider from './Slider/Slider';

const Landing = () => {
  const [swiperList, setSwiperList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstContentsList, setFirstContentsList] = useState([]);

  return (
    <div className="landing">
      <div className="pageContainer">
        <div className="contents">
          <Slider
            swiperList={swiperList}
            setSwiperList={setSwiperList}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <Content
            firstContentsList={firstContentsList}
            setFirstContentsList={setFirstContentsList}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
