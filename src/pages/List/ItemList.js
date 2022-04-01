import React from 'react';
import './List.scss';

function ItemList({ name, price, thumbnail_image_url }) {
  return (
    <div className="itemContainer">
      <div className="containerWrap">
        <div className="listImg">
          <img src={thumbnail_image_url} alt="남자니트" />
          <div className="listIcons">
            <img src="/images/listpage/icon_zoom.gif" alt="iconZoom" />
            <img src="/images/listpage/icon_win.gif" alt="iconWin" />
          </div>
        </div>
        <div className="listTextBox">
          <div className="listText">{name}</div>
          <div className="listPrice">
            <b>{price}</b>원
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
