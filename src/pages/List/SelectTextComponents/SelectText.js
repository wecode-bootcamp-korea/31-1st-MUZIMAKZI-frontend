import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectText = ({ list, idx }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const handleSelectBtn = () => {
    setIsSelected(!isSelected);
    navigate(`?type_id=1&tags=${idx}`);
  };

  return (
    <div>
      <li
        className={`${isSelected ? 'btnBold' : null} selectTagBtn`}
        onClick={handleSelectBtn}
      >
        {list}
      </li>
    </div>
  );
};
export default SelectText;
