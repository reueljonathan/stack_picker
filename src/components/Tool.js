import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const inAnimation = keyframes`
  from {
    opacity: 0;
    top: 150;
  }

  to {
    opacity: 1;
    top: 0;
  }
`;

const ToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${inAnimation} .25s ease-out 1;
`;

const ToolImgContainer = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`;

const ToolImg = styled.img`
  width: 100%;
`;

export default function Tool(props){
  return (
    <ToolContainer>
      <ToolImgContainer>
        <ToolImg src={props.img} />
      </ToolImgContainer>
      <span>{props.name}</span>
    </ToolContainer>
  );
}
