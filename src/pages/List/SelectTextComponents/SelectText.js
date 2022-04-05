import React, { useState } from 'react';

const SelectText = ({ list }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleBtn = () => {
    console.log('test');
    setIsClicked(!isClicked);
  };

  return (
    <li
      className={`${isClicked ? 'btnBold' : null} selectTagBtn`}
      onClick={handleBtn}
    >
      {list}
    </li>
  );
};
export default SelectText;
