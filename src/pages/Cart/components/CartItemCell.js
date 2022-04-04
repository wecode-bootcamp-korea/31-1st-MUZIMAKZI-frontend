import React from 'react';
import './CartItemCell.scss';
const CartItemCell = () => {
  return (
    <tr className="CartItemCell">
      <td className="prdImg">
        <span>
          <input type="checkbox" />
        </span>
        <img
          src="http://image.mujikorea.net/goods/31/14/35/71/BAD76A2S_COL_939_80.jpg"
          alt=""
        />
      </td>
      <td className="prdInfo">
        <p className="prdName">제품명 줄줄줄줄줄줄줄줄줄</p>
        <ul className="prdOption">
          <li>COLOR : LIGHT SILVER GRAY</li>
          <li>SIZE : XL</li>
        </ul>
      </td>
      <td className="prdPrice">
        <p>[판매가] 00,000</p>
      </td>
      <td className="prdQty">
        <ul>
          <li>
            <input type="number" />
          </li>
          <li>
            <button>변경</button>
          </li>
        </ul>
      </td>
      <td className="prdSum">
        <p>00,000 원</p>
      </td>
      <td className="prdOrder">
        <ul>
          <li>
            <button>바로주문</button>
          </li>
          <li>
            <button>삭제</button>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default CartItemCell;
