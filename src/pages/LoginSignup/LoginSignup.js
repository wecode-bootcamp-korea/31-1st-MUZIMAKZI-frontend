import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './components/Form';
import './LoginSignup.scss';

const LoginSignup = ({ handleLoginModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [signInInput, setSignInInput] = useState({
    email: '',
    password: '',
  });

  const [signUpInput, setSignUpInput] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const goToMain = token => {
    navigate('/');
    if (token) {
      localStorage.setItem('TOKEN', token);
    }
    alert('로그인 되었습니다');
    handleLoginModal();
  };

  const signInCommunication = signInput => {
    const { email, password } = signInput;
    fetch('http://10.58.5.51:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        result.access_token
          ? goToMain(result.access_token)
          : alert('로그인 실패');
      });
  };

  const signUpCommunication = signInput => {
    const { firstName, lastName, email, password, phoneNumber } = signInput;
    fetch('http://10.58.5.51:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        phone_number: phoneNumber,
      }),
    })
      .then(response => response.json())
      .then(result => {
        handleSingUpResult(result);
      });
  };

  const handleSignInInput = e => {
    const { name, value } = e.target;
    setSignInInput({ ...signInInput, [name]: value });
  };

  const handleSignUpInput = e => {
    const { name, value } = e.target;
    setSignUpInput({ ...signUpInput, [name]: value });
  };

  const handleLoginTabButton = () => {
    setIsLogin(true);
    setSignUpInput({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
    });
  };

  const handleSingupTabButton = () => {
    setIsLogin(false);
    setSignInInput({
      email: '',
      password: '',
    });
  };

  const handleSingUpResult = result => {
    if (result.message === 'SUCCESS') {
      alert('회원가입에 성공하였습니다');
      setIsLogin('로그인');
    } else if (result.message === 'ALREADY EXITSTS EMAIL') {
      alert('이미 가입된 회원입니다.');
    }
  };
  return (
    <div className="loginSignup">
      <div className="modalBg" onClick={handleLoginModal} />
      <div className="container">
        <div className="signHeader">
          <h1>{isLogin ? '로그인' : '회원가입'}</h1>
          <span className="signHeaderLogo">
            <span>MUZI</span>
            <img src="/images/loginsignup/無知莫知.png" alt="무지막지로고" />
          </span>
        </div>
        <ul className={isLogin ? 'loginTap' : 'signupTap'}>
          <li>
            <button className="login" onClick={handleLoginTabButton}>
              로그인
            </button>
          </li>
          <li>
            <button className="signin" onClick={handleSingupTabButton}>
              회원가입
            </button>
          </li>
        </ul>
        {isLogin ? (
          <Form
            formType="signIn"
            isLogin={isLogin}
            title="로그인"
            inputData={SIGNIN_DATA}
            signInput={signInInput}
            handleInput={handleSignInInput}
            signCommunication={signInCommunication}
          />
        ) : (
          <Form
            formType="signUp"
            title="회원가입"
            isLogin={isLogin}
            inputData={SIGNUP_DATA}
            signInput={signUpInput}
            handleInput={handleSignUpInput}
            signCommunication={signUpCommunication}
          />
        )}
      </div>
    </div>
  );
};

export default LoginSignup;

const SIGNUP_DATA = [
  {
    type: 'firstName',
    text: '성',
  },
  {
    type: 'lastName',
    text: '이름',
  },
  {
    type: 'phoneNumber',
    text: '전화번호',
  },
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];

const SIGNIN_DATA = [
  {
    type: 'email',
    text: '이메일',
  },
  {
    type: 'password',
    text: '비밀번호',
  },
];
