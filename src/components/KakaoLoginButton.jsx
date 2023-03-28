import React from 'react';
import { envVars } from '../vars/envVars';
import kakaoImg from './kakao.jpg';

const KakaoLoginButton = () => {
  const { API_KAKAO_KEY, API_CAMP_KEY } = envVars;
  const loginWithKakao = () => {
    // 카카오 SDK가 초기화되어 있는지 확인합니다.
    if (!window.Kakao.isInitialized()) {
      // 카카오 SDK를 초기화합니다.
      window.Kakao.init(API_KAKAO_KEY);
    }
    // 카카오 로그인 버튼을 생성합니다.
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function (authObj) {
        console.log(authObj);
      },
      fail: function (err) {
        console.log(err);
      },
    });
  };

  return (
    <button onClick={loginWithKakao}>
      <img src={kakaoImg} alt="카카오 로그인" id="kakao-login-btn" />
    </button>
  );
};

export default KakaoLoginButton;
