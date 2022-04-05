import React from 'react';
import { useState, useEffect } from 'react';
import './Landing.scss';
import Content from './LandingContents/Content';
import Slider from './Slider/Slider';

const Landing = () => {
  const [swiperList, setSwiperList] = useState([]);
  const [firstContentsList, setFirstContentsList] = useState([]);

  useEffect(() => {
    fetch('/data/swiperItems.json')
      .then(res => res.json())
      .then(data => {
        setSwiperList(data);
      });
  }, [setSwiperList]);

  useEffect(() => {
    fetch('/data/contentslist.json')
      .then(res => res.json())
      .then(data => {
        setFirstContentsList(data);
      });
  }, [setFirstContentsList]);

  return (
    <div className="landing">
      <div className="pageContainer">
        <div className="contents">
          <Slider swiperList={swiperList} />
          <Content firstContentsList={firstContentsList} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
