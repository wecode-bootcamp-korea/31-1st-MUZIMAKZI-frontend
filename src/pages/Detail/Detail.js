import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailImage from './DetailComponent/DetailImages';
import DetailSmallImage from './DetailComponent/DetailSmallImage';
import TextInfo from './DetailComponent/TextInfo';
import ColorImage from './DetailComponent/ColorImage';
import Button from './DetailComponent/Button';
import SizeTag from './DetailComponent/SizeTag';

import './Detail.scss';

const Detail = () => {
  const [detailData, setDetailData] = useState();

  const [colorSelect, setColorSelect] = useState([]);
  const [sizeSelect, setSizeSelect] = useState([]);

  const [colorSelectId, setColorSelectId] = useState([]);
  const [sizeSelectId, setSizeSelectId] = useState([]);

  const params = useParams();
  console.log(detailData);
  useEffect(() => {
    fetch(`http://10.58.7.109:8000/products/${params.id}`)
      .then(res => res.json())
      .then(res => {
        setDetailData(res.message);
      })
      .catch(e => alert(e.message));
  }, []);

  return (
    <div className="Detail">
      <div className="detailContainer">
        <div id="imageContainer">
          {detailData && (
            <DetailImage thumbnail_url={detailData.thumbnail_image_url} />
          )}
          <div id="smallImageList">
            {detailData &&
              detailData.image.map((small, index) => {
                return (
                  <DetailSmallImage
                    key={index}
                    registerImage={setDetailData}
                    resetImage={setDetailData}
                    detailData={detailData}
                    id={small.id}
                    thumbnail_url={small}
                  />
                );
              })}
          </div>
        </div>
        <div className="detailInform">
          <div className="textContainer">
            <div className="textInfo">
              {detailData && (
                <TextInfo
                  name={detailData.name}
                  price={detailData.price}
                  size={detailData.size}
                  color={detailData.color}
                  description={detailData.description}
                />
              )}
            </div>
          </div>

          <div className="sizeBtn">
            <span>Color선택</span>
          </div>
          <div className="colorInfo">
            {detailData &&
              detailData.color.map((color, idx) => {
                return (
                  <ColorImage
                    id={idx}
                    key={idx}
                    color={color}
                    colorId={detailData.color_id}
                    setColorSelectId={setColorSelectId}
                    setColorSelect={setColorSelect}
                    colorSelect={colorSelect}
                  />
                );
              })}
          </div>
          <span>size선택</span>
          <div className="sizeInfo">
            {detailData &&
              detailData.size.map((size, idx) => {
                return (
                  <SizeTag
                    id={idx}
                    key={idx}
                    size={size}
                    size_id={detailData.size_id}
                    setSizeSelect={setSizeSelect}
                    setSizeSelectId={setSizeSelectId}
                    sizeSelect={sizeSelect}
                  />
                );
              })}
          </div>
          <Button colorSelectId={colorSelectId} sizeSelectId={sizeSelectId} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
