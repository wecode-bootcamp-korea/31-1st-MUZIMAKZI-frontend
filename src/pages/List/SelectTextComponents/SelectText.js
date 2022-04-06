import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectText = ({ list, updateParams, idx }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectBtn = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div onClick={goToDetail}>
      <li
        className={`${isSelected ? 'btnBold' : null} selectTagBtn`}
        onClick={() => {
          handleSelectBtn();
          updateParams(`&tags=${idx}`);
        }}
      >
        {list}
      </li>
    </div>
  );
};
export default SelectText;
