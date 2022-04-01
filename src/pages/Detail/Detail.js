import React, { useState, useEffect } from 'react';
import './Detail.scss';
import DetailImage from './DetailComponent/DetailImages';
import DetailSmallImage from './DetailComponent/DetailSmallImage';
import TextInfo from './DetailComponent/TextInfo';
import ColorImage from './DetailComponent/ColorImage';
import SizeTag from './DetailComponent/SizeTag';
import Button from './DetailComponent/Button';
const Detail = () => {
  const [detailSmallImage, setDetailSmallImage] = useState();
  const [textData, setTextData] = useState();
  const [colorData, setColorData] = useState();
  const [sizeData, setSizeData] = useState();

  useEffect(() => {
    fetch('/data/detailSmallList.json')
      .then(res => res.json())
      .then(res => setDetailSmallImage(res))
      .catch(e => console.error(e));
  }, []);
  useEffect(() => {
    fetch('/data/textInfoData.json')
      .then(res => res.json())
      .then(res => setTextData(res))
      .catch(e => console.error(e));
  }, []);
  useEffect(() => {
    fetch('/data/detailColorList.json')
      .then(res => res.json())
      .then(res => setColorData(res))
      .catch(e => console.error(e));
  }, []);
  useEffect(() => {
    fetch('/data/sizeTag.json')
      .then(res => res.json())
      .then(res => setSizeData(res))
      .catch(e => console.error(e));
  }, []);

  return (
    <div className="container">
      <span>남성복</span>
      <div id="imageContainer">
        <DetailImage />
        <div className="smallImageList">
          {detailSmallImage &&
            detailSmallImage.map(Small => {
              return (
                <DetailSmallImage
                  key={Small.id}
                  id={Small.id}
                  thumbnail={Small.thumbnail}
                />
              );
            })}
        </div>
      </div>
      <div className="detailInform">
        <p className="title">무지막지·저지</p>
        <div className="textContainer">
          <div id="titleName">
            <p>판매가</p>
            <p>배송비</p>
          </div>
          <div className="textInfo">
            {textData &&
              textData.map(text => {
                return (
                  <TextInfo
                    key={text.id}
                    id={text.id}
                    price={text.price}
                    배송비={text.배송비}
                  />
                );
              })}
          </div>
        </div>
        <div className="textDetailBox">
          <dd className="textArea">
            우리는 무지막지하지만 무지하게 코딩을 잘하게 될거에요.
          </dd>
        </div>
        <div className="sizeBtn">
          <span>Color선택</span>
          <button className="rightBtn">옵션다시선택</button>
        </div>
        <div className="colorInfo">
          {colorData &&
            colorData.map(color => {
              return (
                <ColorImage
                  key={color.id}
                  id={color.id}
                  thumbnail={color.thumbnail}
                />
              );
            })}
        </div>
        <span>size선택</span>
        <div className="sizeInfo">
          {sizeData &&
            sizeData.map(size => {
              return <SizeTag key={size.id} thumbnail={size.thumbnail} />;
            })}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Detail;
