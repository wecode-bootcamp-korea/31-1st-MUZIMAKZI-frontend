import React from 'react';
import { Link } from 'react-router-dom';
import LandingContents from '../LandingContents/LandingContents';

const Content = ({ firstContentsList }) => {
  return (
    <div className="firstContents">
      <div className="firstTop">
        <span>기획전</span>
        <Link to="/">
          <button className="firstTopBtn" />
        </Link>
      </div>
      <ul className="firstBottom">
        {firstContentsList &&
          firstContentsList.map((content, idx) => {
            return <LandingContents key={idx} {...content} />;
          })}
      </ul>
    </div>
  );
};

export default Content;
