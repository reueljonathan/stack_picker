import React from 'react';
import styled from 'styled-components';

const ToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Tool(props){
  return (
    <ToolContainer>
      <img src={props.img} width={props.width} height={props.height} />
      <span>{props.name}</span>
    </ToolContainer>
  );
}
