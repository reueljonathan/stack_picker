import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoHeader = styled.div `
  text-align: center;
  padding: 1em 0;
`;

export default function Header(props){
  return <LogoHeader>
    <img src={logo} height={75} />
  </LogoHeader>;
}
