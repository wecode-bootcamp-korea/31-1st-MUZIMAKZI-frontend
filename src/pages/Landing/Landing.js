import React from 'react';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import SwiperData from './SwiperData';
import './Landing.scss';
import SliderButton from './SliderButton';
import Aside from '../../components/aside/Aside';

const Landing = () => {
  const [swiperList, setSwiperList] = useState([]);
  // 이미지 리스트

  // const [swiper, setSwiper] = useState(swiperList[0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('data/swiperItems.json')
      .then(res => res.json())
      .then(data => setSwiperList(data));
  }, []);

  const handleSwipe = direction => {
    setCurrentIndex(prevIndex => prevIndex + direction);
  };

  // function useInterval(currentIndex, delay) {
  //   const savedCallback = useRef();
  //   useEffect(() => {
  //     savedCallback.current = currentIndex;
  //   }, [currentIndex]);

  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // }

  // const swipers = () => {
  //   useInterval(() => {
  //     setCurrentIndex(currentIndex => currentIndex + 1);
  //   }, 2000);
  // };

  return (
    <div className="landing">
      <div className="main">
        <Aside />

        <div className="sliderArea">
          <div className="slider">
            <SliderButton direction="prev" onClick={() => handleSwipe(1)} />
            <SliderButton direction="next" onClick={() => handleSwipe(-1)} />
            <div className="sliderList">
              <div
                className="sliderTrack"
                style={{
                  transform: `translateX(${
                    (-100 / swiperList.length) * (1 + currentIndex)
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
