import React from 'react';
import './input.scss';

const Input = ({ type, text, value, handleInput, isLogin, isValid }) => {
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
        {isLogin ? null : isValid ? <ValidCheck /> : <InValidCheck />}
      </div>
    </div>
  );
};

export default Input;

const ValidCheck = () => {
  return <span className="valid pass">✔️</span>;
};

const InValidCheck = () => {
  return <span className="valid nonPass">✔️</span>;
};
