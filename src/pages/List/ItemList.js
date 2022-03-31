import React from 'react';
import './List.scss';

function ItemList({ name, price, thumbnail }) {
  return (
    <div className="itemContainer">
      <div className="containerWrap">
        <div className="listImg">
          <img src={thumbnail} alt="남자니트" />
          <div className="listIcons">
            <img
              src="http://image.mujikorea.net/store/common/icon_zoom.gif"
              alt=""
            />
            <img
              src="http://image.mujikorea.net/store/common/icon_win.gif"
              alt=""
            />
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
