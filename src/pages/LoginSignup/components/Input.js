import React from 'react';
import './input.scss';

const Input = ({ name, type, text, value, handleInput }) => {
  return (
    <div className="input">
      <div className="inputWrapper">
        <input
          className="signInput"
          name={type}
          type={type}
          placeholder={text}
          value={value}
          onChange={handleInput}
        />
        {name === 'signUp' ? <span className="valid">✔️</span> : null}
      </div>
    </div>
  );
};

export default Input;

const ValidCheck = () => {
  <span className="valid pass">✔️</span>;
};

const InValidCheck = () => {
  <span className="valid nonPass">✔️</span>;
};
