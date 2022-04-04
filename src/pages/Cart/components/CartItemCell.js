import React from 'react';
import './CartItemCell.scss';
const CartItemCell = ({ cartItem: { product_name, size, color, Price } }) => {
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
        <p className="prdName">{product_name}</p>
        <ul className="prdOption">
          <li>COLOR : {color}</li>
          <li>SIZE : {size}</li>
        </ul>
      </td>
      <td className="prdPrice">
        <p>[판매가] {Price}</p>
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
