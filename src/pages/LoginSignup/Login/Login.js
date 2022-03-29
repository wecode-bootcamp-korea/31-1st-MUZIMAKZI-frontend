import React, { useState, useEffect } from 'react';
import './Login.scss';
const Login = () => {
  const [isActice, setIsActice] = useState(false);
  const [loginInputValue, setLoginInputValue] = useState({
    id: '',
    password: '',
  });
  const handleInput = e => {
    const { value, name } = e.target;
    setLoginInputValue(prevValue => ({ ...prevValue, [name]: value }));
  };

  const checkInput = () => {
    const check =
      loginInputValue.id.indexOf('@') === -1 ||
      loginInputValue.password.length < 5;
    setIsActice(!check);
  };
  useEffect(() => {
    checkInput();
  });
  return (
    <div className="Login">
      <form className="loginForm">
        <input
          className="emailInput"
          name="id"
          value={loginInputValue.id}
          type="text"
          placeholder="이메일"
          onChange={e => {
            handleInput(e);
            checkInput();
          }}
        />
        <input
          className="passwordInput"
          name="password"
          value={loginInputValue.password}
          type="password"
          placeholder="비밀번호"
          onChange={e => {
            handleInput(e);
            checkInput();
          }}
        />
        <button className="loginBtn" type="submit" disabled={!isActice}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
