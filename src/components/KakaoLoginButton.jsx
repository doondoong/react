import React from 'react';
import { envVars } from '../vars/envVars';
import kakaoImg from './kakao.jpg';
import { useNavigate } from 'react-router-dom';

const KakaoLoginButton = () => {
  const navigate = useNavigate();
  const { API_KAKAO_KEY } = envVars;
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
        const userToken = {
          accessToken: authObj.access_token,
          refreshToken: authObj.refresh_token,
          expiresAt: new Date().getTime() + authObj.expires_in * 1000,
          scopes: authObj.scopes,
        };
        // 추출한 정보를 로컬 스토리지에 저장합니다.
        localStorage.setItem('userToken', JSON.stringify(userToken));
        navigate('/react/todo');
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
