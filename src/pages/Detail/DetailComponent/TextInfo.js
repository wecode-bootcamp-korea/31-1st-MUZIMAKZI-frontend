import React from 'react';
import '../DetailComponent/TextInfo.scss';

const TextInfo = ({ id, name, price, size, color, description, thumbnail }) => {
  return (
    <div className="textArea">
      <tr>
        <th colspan="2">{name}</th>
      </tr>
      <tr>
        <td>가격</td>
        <td>{price}</td>
      </tr>
      <tr>
        <td>{description}</td>
      </tr>
    </div>
  );
};

export default TextInfo;
