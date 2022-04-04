import React from 'react';
import SelectText from '../SelectTextComponents/SelectText';
import './SelectBox.scss';

const SelectBox = () => {
  return (
    <div className="selectBox">
      <ul className="selectText">
        {SELECTTEXT_DATA.map(select => (
          <SelectText key={select.id} {...select} />
        ))}
      </ul>
      <ul className="selectBtnGroup">
        <li className="imageBtn" />
        <li className="imageListBtn" />
        <li className="more">50</li>
      </ul>
    </div>
  );
};

export default SelectBox;

const SELECTTEXT_DATA = [
  {
    id: 1,
    list: '전체',
    className: 'selectFir',
  },
  {
    id: 2,
    list: '온라인 한정 사이즈',
    className: 'selectList',
  },
  {
    id: 3,
    list: '무료배송',
    className: 'selectList',
  },
  {
    id: 4,
    list: 'SALE',
    className: 'selectRed',
  },
  {
    id: 5,
    list: '품절',
    className: 'selectList',
  },
  {
    id: 6,
    list: '낮은가격',
    className: 'selectList',
  },
  {
    id: 7,
    list: '높은가격',
    className: 'selectList',
  },
];
