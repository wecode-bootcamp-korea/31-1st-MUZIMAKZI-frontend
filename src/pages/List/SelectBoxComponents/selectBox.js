import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SelectText from '../SelectTextComponents/SelectText';
import './SelectBox.scss';

const SelectBox = ({ updateParams }) => {
  return (
    <div className="selectBox">
      <ul className="selectText">
        {SELECTTEXT_DATA.map((select, idx) => {
          return (
            <SelectText
              idx={idx + 1}
              key={select.id}
              list={select.list}
              updateParams={updateParams}
            />
          );
        })}
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
