import React, { useState } from 'react';
import './CartItemCell.scss';
const CartItemCell = ({
  cartItem: { product_name, size, color, price, thumbnail, count },
}) => {
  const [itemCount, setItemCount] = useState(count);

  const sum = price * count;

  const handleCount = e => {
    const { value } = e.target;
    setItemCount(value);
  };

  const handleChangeCount = () => {
    alert('수량을 변경하시겠습니까?');
    alert('변경되었습니다.');
  };

  return (
    <tr className="CartItemCell">
      <td className="prdImg">
        <span>
          <input type="checkbox" />
        </span>
        <img src={`images/cartpage/${thumbnail}`} alt={thumbnail} />
      </td>
      <td className="prdInfo">
        <p className="prdName">{product_name}</p>
        <ul className="prdOption">
          <li>COLOR : {color}</li>
          <li>SIZE : {size}</li>
        </ul>
      </td>
      <td className="prdPrice">
        <p>[판매가] {price}</p>
      </td>
      <td className="prdQty">
        <ul>
          <li>
            <input
              type="number"
              min="1"
              onChange={handleCount}
              value={itemCount}
            />
          </li>
          <li>
            <button onClick={handleChangeCount}>변경</button>
          </li>
        </ul>
      </td>
      <td className="prdSum">
        <p>{sum} 원</p>
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
