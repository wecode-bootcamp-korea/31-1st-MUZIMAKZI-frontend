import React from 'react';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import SwiperData from './SwiperData';
import './Landing.scss';
import SliderButton from './SliderButton';
import Aside from '../../components/aside/Aside';
import Nav from '../../components/nav/Nav';

const Landing = () => {
  const [swiperList, setSwiperList] = useState([]);
  // 이미지 리스트

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('data/swiperItems.json')
      .then(res => res.json())
      .then(data => setSwiperList(data));
  }, []);

  function handleSlide(currentIndex) {
    if (currentIndex === swiperList.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = 4;
    }
    setCurrentIndex(currentIndex);
  }

  function handleSwipe(direction) {
    handleSlide(currentIndex + direction);
  }

  useEffect(() => {
    setTimeout(handleSwipe(3), 3000);
  }, []);

  return (
    <div className="landing">
      <Nav />
      <div className="main">
        <Aside />
        <div className="sliderArea">
          <div className="slider">
            {/* <SliderButton direction="prev" onClick={() => handleSwipe(1)} />
            <SliderButton direction="next" onClick={() => handleSwipe(-1)} /> */}
            <div className="sliderList">
              <div
                className="sliderTrack"
                style={{
                  transform: `translateX(${
                    (-100 / swiperList.length) * (0.5 + currentIndex)
                  }%)`,
                }}
              >
                {swiperList.map(imgList => {
                  return <SwiperData key={imgList.id} {...imgList} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

// return (
//   <div className="sliderArea">
//     <div className="slider">

//       <div className="sliderTrack">
//         <ul
//           className="imgList"
//           // style={{
//           //   transform: `translateX(${
//           //     (-100 / swiperList.length) * (0.5 + currentIndex)
//           //   }%)`,
//           // }}
//         >
//           {swiperList.map(imgList => {
//             return <SwiperData key={imgList.id} {...imgList} />;
//           })}
//         </ul>
//       </div>
//     </div>
//   </div>
// );
// };
