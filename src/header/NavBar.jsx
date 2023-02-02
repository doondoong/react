import React from 'react';
import styled, {css} from 'styled-components';

/** 네브바 */
const NavWrapper = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    background-color: #F1B4A3;
    align-items: center;
    justify-content: center;
    ${(props) => props.dark && css `background-color: black;`}
`;

export default function NavBar() {
    return (
        <NavWrapper>
            <h1 className='text-3xl'>이둥이네</h1>
        </NavWrapper>
    );
}