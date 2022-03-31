import React from 'react';
import './input.scss';

const Input = ({ type, text, handleInput, value }) => {
  return (
    <div className="input">
      <div className="inputWrapper">
        <input
          name={type}
          type={type}
          placeholder={text}
          value={value}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default Input;
