import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './LoginSignup.scss';
const LoginSignup = () => {
  const [menuTab, setMenuTab] = useState('로그인');

  const handleLoginTabButton = () => {
    setMenuTab('로그인');
  };
  const handleSingupTabButton = () => {
    setMenuTab('회원가입');
  };
  return (
    <div className="LoginSignup">
      <div className="SignHeader">
        <h1>{menuTab}</h1>
        <span className="SignHeaderLogo">
          <span>MUZI</span>
          <img src="images/loginsignup/無知莫知.png" alt="무지막지로고" />
        </span>
      </div>
      <ul className={menuTab === '로그인' ? 'loginTap' : 'signupTap'}>
        <li>
          <button className="login" onClick={handleLoginTabButton}>
            회원
          </button>
        </li>
        <li>
          <button className="signin" onClick={handleSingupTabButton}>
            회원가입
          </button>
        </li>
      </ul>
      {menuTab === '로그인' ? <Login /> : <Signup />}
    </div>
  );
};

export default LoginSignup;
