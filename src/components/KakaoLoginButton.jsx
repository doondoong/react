import React from 'react';
import KakaoLogin from 'react-kakao-login';
import { envVars } from '../vars/envVars';
import kakaoImg from './kakao.jpg';

const KakaoLoginButton = () => {
  const responseKaKao = (response) => {
    console.log(response); // 카카오 로그인 성공 시 정보가 출력됩니다.
  };
  const { API_KAKAO_KEY } = envVars;
  return (
    <KakaoLogin
      jsKey={API_KAKAO_KEY} // 카카오 앱의 JavaScript 키를 입력합니다.
      onSuccess={responseKaKao} // 로그인 성공 시 실행될 함수를 입력합니다.
      onFailure={(error) => console.log(error)} // 로그인 실패 시 실행될 함수를 입력합니다.
      render={({ onClick }) => (
        <button onClick={onClick}>
          <img src={kakaoImg} alt="카카오 로그인" />
        </button>
      )}
    />
  );
};

export default KakaoLoginButton;
