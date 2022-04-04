import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import SwiperData from './Slider/SwiperData';
import './Landing.scss';
// import SliderButton from './Slider/SliderButton';
import Aside from '../../components/aside/Aside';
import Nav from '../../components/nav/Nav';
// import LandingContents from './LandingContents/LandingContents';
import Content from './LandingContents/Content';
import Slider from './Slider/Slider';

const Landing = () => {
  const [swiperList, setSwiperList] = useState([]);
  // 이미지 리스트
  const [currentIndex, setCurrentIndex] = useState(0);
  // 현재 이미지
  const [firstContentsList, setFirstContentsList] = useState([]);

  // useEffect(() => {
  //   fetch('data/swiperItems.json')
  //     .then(res => res.json())
  //     .then(data => setSwiperList(data));
  // }, [currentIndex]);
  // // mock data 불러옴
  // useEffect(() => {
  //   fetch('data/contentslist.json')
  //     .then(res => res.json())
  //     .then(data => setFirstContentsList(data));
  // }, []);

  // function handleSlide(currentIndex) {
  //   if (currentIndex === swiperList.length) {
  //     currentIndex = 0;
  //   } else if (currentIndex < 0) {
  //     currentIndex = 4;
  //   }
  //   setCurrentIndex(currentIndex);
  // }

  // function handleSwipe(direction) {
  //   handleSlide(currentIndex + direction);
  // }
  // 상단은 버튼 코드 !

  // useEffect(() => {
  //   const timeoutId = setTimeout(
  //     () =>
  //       setCurrentIndex(currentValue => {
  //         if (currentValue < swiperList.length - 1) {
  //           return setCurrentIndex(currentIndex + 1);
  //         } else {
  //           return setCurrentIndex(0);
  //         }
  //       }),
  //     2500
  //   );
  //   return () => clearTimeout(timeoutId);
  // });
  // 마지막에 배열을 넣지 않은 이유는 clearup을 위한 것

  return (
    <div className="landing">
      <div className="pageContainer">
        <div className="contents">
          {/* <div className="sliderArea">
            <div className="slider">
              <SliderButton direction="prev" onClick={() => handleSwipe(-1)} />
              <SliderButton direction="next" onClick={() => handleSwipe(1)} />
              <div className="sliderList">
                <div
                  className="sliderTrack"
                  style={{
                    transform: `translateX(${-870 * (0.5 + currentIndex)}px)`,
                  }}
                >
                  {swiperList.map(imgList => {
                    return <SwiperData key={imgList.id} {...imgList} />;
                  })}
                </div>
              </div>
            </div>
          </div> */}
          <Slider
            swiperList={swiperList}
            setSwiperList={setSwiperList}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          {/* <div className="firstContents">
            <div className="firstTop">
              <span>기획전</span>
              <Link to="/">
                <button className="firstTopBtn" />
              </Link>
            </div>
            <ul className="firstBottom">
              {firstContentsList.map(contentList => {
                // console.log(contentList);
                return (
                  <LandingContents key={contentList.id} {...contentList} />
                );
              })}
            </ul>
          </div> */}
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
