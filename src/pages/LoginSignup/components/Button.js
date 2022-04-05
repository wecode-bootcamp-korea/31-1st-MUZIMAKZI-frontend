import React from 'react';
import './Button.scss';

const Button = ({ title, signCommunication }) => {
  return (
    <button className="button" onClick={signCommunication}>
      {title}
    </button>
  );
};

export default Button;
