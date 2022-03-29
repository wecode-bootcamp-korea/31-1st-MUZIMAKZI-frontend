import React, { useState, useEffect } from 'react';
import '../Signup/Signup.scss';
const Signup = () => {
  const [isActice, setIsActice] = useState(false);
  const [signupInputValue, setSignupInputValue] = useState({
    name: '',
    phone: '',
    id: '',
    password: '',
  });
  const handleInput = e => {
    const { value, name } = e.target;
    setSignupInputValue(prevValue => ({ ...prevValue, [name]: value }));
  };

  const checkInput = () => {
    const check =
      signupInputValue.id.indexOf('@') === -1 ||
      signupInputValue.password.length < 5;
    setIsActice(!check);
  };
  useEffect(() => {
    checkInput();
  });
  return (
    <div className="Signup">
      <form>
        <input
          className="nameInput"
          name="name"
          type="text"
          placeholder="이름"
          value={signupInputValue.name}
          onChange={e => {
            handleInput(e);
            checkInput();
          }}
        />
        <input
          className="phoneInput"
          name="phone"
          type="text"
          placeholder="전화번호"
          value={signupInputValue.phone}
          onChange={e => {
            handleInput(e);
            checkInput();
          }}
        />
        <input
          className="emailInput"
          name="id"
          type="text"
          placeholder="이메일"
          value={signupInputValue.id}
          onChange={e => {
            handleInput(e);
            checkInput();
          }}
        />
        <input
          className="passwordInput"
          name="password"
          type="password"
          placeholder="비밀번호"
          value={signupInputValue.password}
          onChange={e => {
            handleInput(e);
            checkInput();
          }}
        />
        <button className="loginBtn" type="submit" disabled={!isActice}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
