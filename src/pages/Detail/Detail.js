import React, { useState, useEffect } from 'react';
import './Detail.scss';
import DetailImage from './DetailComponent/DetailImages';
import DetailSmallImage from './DetailComponent/DetailSmallImage';
import TextInfo from './DetailComponent/TextInfo';
const Detail = () => {
  const [detailSmallImage, setDetailSmallImage] = useState();
  const [textData, setTextData] = useState();

  useEffect(() => {
    fetch('/data/detailSmallList.json')
      .then(res => res.json())
      .then(res => setDetailSmallImage(res))
      .catch(e => console.error(e));
    fetch('/data/textInfoData.json')
      .then(res => res.json())
      .then(res => setTextData(res))
      .catch(e => console.error(e));
  }, []);

  return (
    <div>
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
      <div className="detailInform">
        {textData && <TextInfo props={textData} />}
        <div classNmae="text-info"></div>
        <div classNmae="color-info"></div>
        <div classNmae="size-info"></div>
        <div classNmae="button"></div>
      </div>
    </div>
  );
};

export default Detail;
