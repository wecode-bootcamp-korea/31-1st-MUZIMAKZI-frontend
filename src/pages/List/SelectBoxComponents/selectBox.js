import React from 'react';
import SelectText from '../SelectTextComponents/SelectText';
import './SelectBox.scss';

console.log('dd');
const SelectBox = () => {
  return (
    <div className="selectBox">
      <ul className="selectText">
        {SELECTTEXT.map((select, idx) => {
          return (
            <SelectText idx={idx + 1} key={select.id} list={select.list} />
          );
        })}
      </ul>
      <ul className="selectBtnGroup">
        <li className="imageBtn" />
        <li className="imageListBtn" />
        <li className="more">60</li>
      </ul>
    </div>
  );
};

export default SelectBox;

const SELECTTEXT = [
  {
    id: 1,
    list: '온라인 한정 사이즈',
  },
  {
    id: 2,
    list: '무료배송',
  },
  {
    id: 3,
    list: 'SALE',
  },
  {
    id: 4,
    list: '품절',
  },
];
