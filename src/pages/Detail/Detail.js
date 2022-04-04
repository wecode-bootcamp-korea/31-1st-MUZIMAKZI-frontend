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
  const [colorSelect, setColorSelect] = useState();
  const [sizeSelect, setSizeSelect] = useState();

  useEffect(() => {
    fetch('/data/detailSmallList.json')
      .then(res => res.json())
      .then(res => setDetailSmallImage(res))
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    fetch('http://10.58.2.45:8000/products/detail/1')
      .then(res => res.json())
      // .then(res => setTextData(res))
      .then(res => {
        setTextData(res.message);
      })
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    fetch('/data/detailColorList.json')
      .then(res => res.json())
      .then(res => setColorSelect(res))
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    fetch('/data/sizeTag.json')
      .then(res => res.json())
      .then(res => setSizeSelect(res))
      .catch(e => console.error(e));
  }, []);

  return (
    <div className="Detail">
      <div className="container">
        <span>남성복</span>
        <div id="imageContainer">
          <DetailImage />
          <div id="smallImageList">
            {detailSmallImage &&
              detailSmallImage.map(small => {
                return (
                  <DetailSmallImage
                    key={small.id}
                    id={small.id}
                    thumbnail={small.thumbnail}
                  />
                );
              })}
          </div>
        </div>
        <div className="detailInform">
          <div className="textContainer">
            <div id="titleName">
              <p>판매가</p>
              <p>배송비</p>
            </div>
            <div className="textInfo">
              {textData && (
                <TextInfo
                  name={textData.name}
                  price={textData.price}
                  size={textData.size}
                  color={textData.color}
                  description={textData.description}
                />
              )}
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
            {colorSelect &&
              colorSelect.map(color => {
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
            {sizeSelect &&
              sizeSelect.map(size => {
                return <SizeTag key={size.id} thumbnail={size.thumbnail} />;
              })}
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Detail;
