import React from 'react';
import './LandingContents.scss';

const LandingContents = ({ img_url, title, content_value }) => {
  return (
    <li className="firstContent">
      <img src={img_url} alt={title} />
      <div className="contentValue">
        <span>{content_value}</span>
      </div>
    </li>
  );
};

export default LandingContents;
