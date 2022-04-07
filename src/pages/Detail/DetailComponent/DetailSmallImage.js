import React from 'react';
import '../DetailComponent/DetailSmallImage.scss';
const DetailSmallImage = ({
  id,
  thumbnail_url,
  registerImage,
  detailData,
  resetImage,
}) => {
  const submitThumnail = e => {
    const { name, value } = e.target;
    registerImage(detailData => ({ ...detailData, [name]: value }));
  };

  const mainThumbnail = e => {
    const { name } = e.target;
    resetImage(detailData => ({
      ...detailData,
      [name]: originURL,
    }));
  };

  const originURL = { thumbnail_url };
  const thumnail = 'thumbnail_image_url';

  return (
    <div>
      <button
        name={thumnail}
        onMouseEnter={submitThumnail}
        // onMouseLeave={mainThumbnail}
        value={thumbnail_url}
      >
        <img className="detailSmallList" src={thumbnail_url} alt="smallImg" />
      </button>
    </div>
  );
};

export default DetailSmallImage;
