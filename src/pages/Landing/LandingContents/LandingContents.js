import React from 'react';
import './LandingContents.scss';

const LandingContents = ({ promote_image_url, promote_name }) => {
  return (
    <li className="firstContent">
      <img src={promote_image_url} alt="content" />
      <div className="contentValue">
        <span>{promote_name}</span>
      </div>
    </li>
  );
};

export default LandingContents;
