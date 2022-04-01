import React, { useState } from 'react';
import '../DetailComponent/Button.scss';
const Button = () => {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div className="button">
        <span>수량선택</span>
        <button
          onClick={() => {
            setAmount(amount - 1);
          }}
        >
          -
        </button>
        <span>{amount}</span>

        <button
          onClick={() => {
            setAmount(amount + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="btnContainer">
        <button id="wishBtn">wish</button>
        <button id="cartBtn">장바구니</button>
        <button id="payBtn">바로구매</button>
      </div>
    </>
  );
};

export default Button;
