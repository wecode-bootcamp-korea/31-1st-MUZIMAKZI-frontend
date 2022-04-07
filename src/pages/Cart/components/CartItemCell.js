import React, { useState } from 'react';
import './CartItemCell.scss';
const CartItemCell = ({
  cartItem: { name, size, color, price, thumbnail_url, quantity, cart_id },
}) => {
  const [itemCount, setItemCount] = useState(quantity);

  const sum = price * quantity;

  const handleCount = e => {
    const { value } = e.target;
    setItemCount(value);
  };

  const handleChangeCount = () => {
    alert('수량을 변경하시겠습니까?');
    alert('변경되었습니다.');
  };

  const deleteItem = () => {
    fetch('http://10.58.2.42:8000/carts', {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: {
        cart_id: cart_id,
      },
    })
      .then(response => response.json())
      .then(
        response =>
          response.message === 'DETETED' && alert('항목이 삭제되었습니다')
      );
  };

  return (
    <tr className="CartItemCell">
      <td className="prdImg">
        <img src={`${thumbnail_url}`} alt="cartImg" />
      </td>
      <td className="prdInfo">
        <p className="prdName">{name}</p>
        <ul className="prdOption">
          <li>COLOR : {color}</li>
          <li>SIZE : {size}</li>
        </ul>
      </td>
      <td className="prdPrice">
        <p>[판매가] {parseInt(price)}</p>
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
            <button
              onClick={() => {
                deleteItem();
              }}
            >
              삭제
            </button>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default CartItemCell;
