import React from 'react';
import { Link } from 'react-router-dom';
import './Labo.scss';

const Labo = () => {
  return (
    <div className="Labo">
      <article className="container">
        <div className="laboImg">
          <img src="/images/listpage/MUZI1.jpg" alt="MUZI MAKZI" />
        </div>
        <div className="labo">
          <img
            className="laboImg"
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="MUZI MAKZI"
          />
          <h4 className="laboTitle">무지막지</h4>
          <div className="laboFlex">
            <p className="laboText">
              무지막지한 사람들의 사이트 입니다. <br />
              무지막지에서는 적당한 두께로 <br />
              계절에 상관없는 의류를 판매합니다. <br />
            </p>
            <p className="laboSize">
              <b>
                무지막지한 저지 · 풀오버 파카 <br />
              </b>
              여성：171cm / 사이즈 XXS～XS / 그레이 <br />
              남성：184cm / 사이즈 L～XL / 그레이 <br />
            </p>
          </div>
        </div>
        <div className="viewProductBox">
          <Link to="/list" className="viewProductBtn">
            MUZI MAKZI 상품 보러가기
          </Link>
        </div>
      </article>
    </div>
  );
};
export default Labo;
