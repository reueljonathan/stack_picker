import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoHeader = styled.div `
  text-align: center;
  padding: 1em 0;
`;

const LogoImage = styled.img`
  width: 420px;

  @media(max-width: 420px){
    width: 100%;
  }
`;

export default function Header(props){
  return <LogoHeader>
    <LogoImage src={logo} />
  </LogoHeader>;
}
