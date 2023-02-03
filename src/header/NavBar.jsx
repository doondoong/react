import React from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

/** 네브바 */
const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 110px;
    width: 100%;
    background-color: #F1B4A3;
    align-items: center;
    justify-content: center;
    ${(props) => props.dark && css `background-color: black;`}
`;

export default function NavBar() {

    // const handleReload = () => {
    //     window.location.reload();
    // }
    return (
        <NavWrapper>
            <div className='mt-2 h-2/3 flex flex-row justify-center'>
                <button className='text-3xl text-rose-900 font-semibold hover:text-rose-600'>이둥이네 정보센터</button>
            </div>
            <nav className='h-1/3 w-full flex flex-row items-center justify-start space-x-10 p-4'>
                <Link to='/react' className='text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12'>키즈카페</Link>
                <Link to='/react/care' className='text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12'>조리원</Link>
                <div className='text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12'>준비중..</div>
            </nav>
        </NavWrapper>
    );
}