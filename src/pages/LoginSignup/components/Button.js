import React from 'react';
import './Button.scss';

const Button = ({ title, signCommunication, signInput }) => {
  return (
    <button
      className="button"
      onClick={() => {
        signCommunication(signInput);
      }}
    >
      {title}
    </button>
  );
};

export default Button;
