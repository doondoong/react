import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

/** 네브바 */
const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  width: 100%;
  background-color: #f1b4a3;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.dark &&
    css`
      background-color: black;
    `}
`;

export default function NavBar() {
  // const handleReload = () => {
  //     window.location.reload();
  // }
  return (
    <NavWrapper>
      <div className="mt-3 h-2/3 flex flex-row justify-center">
        <img
          className="h-10 w-10 object-fill mr-5
                  hover:scale-150"
          src={`${process.env.PUBLIC_URL}/doong.png`}
        />
        <Link
          to="/react"
          className="text-3xl text-rose-900 font-semibold hover:text-rose-600"
        >
          이둥이네 정보센터
        </Link>
      </div>
      <nav className="h-1/3 w-full flex flex-row items-center justify-start space-x-10 p-4">
        <Link
          to="/react/goGamping"
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        >
          할일
        </Link>
        <Link
          to="/react"
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        >
          키즈카페
        </Link>
        <Link
          to="/react/care"
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        >
          조리원
        </Link>

        <Link
          to="/react/checkPage"
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        >
          자동화
        </Link>
      </nav>
    </NavWrapper>
  );
}
