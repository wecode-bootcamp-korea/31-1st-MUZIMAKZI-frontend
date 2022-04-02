import React, { useState, useEffect } from 'react';
import './input.scss';

const Input = ({ name, type, text, value, handleInput, handleSignUpValid }) => {
  const [isValid, setIsValid] = useState(false);

  const valid = value => {
    const validTest = name === 'signUp' && handleSignUpValid(value);
    setIsValid(validTest);
  };

  useEffect(() => {
    valid(value);
  });

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
        {name === 'signIn' ? null : isValid ? <ValidCheck /> : <InValidCheck />}
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
