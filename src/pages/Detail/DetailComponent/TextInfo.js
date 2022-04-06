import React from 'react';
import '../DetailComponent/TextInfo.scss';

const TextInfo = ({ id, name, price, size, color, description, thumbnail }) => {
  return (
    <div className="textArea">
      <tr>
        <th colSpan="2">{name}</th>
      </tr>
      <tr>
        <td></td>
        <td>{price}</td>
      </tr>
      <tr>
        <td>{description}</td>
      </tr>
    </div>
  );
};

export default TextInfo;
