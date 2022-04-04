import React from 'react';
import './ItemList.scss';

function ItemList({ name, price, thumbnail_image_url }) {
  return (
    // 카드에대한 컨테이너
    <li className="itemList">
      <img className="listImg" src={thumbnail_image_url} alt="남자니트" />
      <div className="listIcons">
        <img
          className="itemListImg"
          src="/images/listpage/icon_zoom.gif"
          alt="iconZoom"
        />
        <img
          className="itemListImg"
          src="/images/listpage/icon_win.gif"
          alt="iconWin"
        />
      </div>
      <div className="listText">{name}</div>
      <div className="listPrice">
        <b>{price}</b>원
      </div>
      <div className="tagTop">
        <span className="sale">SALE</span>
        <span className="onlineSize">온라인한정사이즈</span>
      </div>
      <div className="tagBottom">
        <span className="freeShipping">무료배송</span>
        <span className="soldOut">품절</span>
      </div>
    </li>
  );
}

export default ItemList;
