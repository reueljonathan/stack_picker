import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import styled from 'styled-components';
import StackGenerator from './components/StackGenerator';

const Page = styled.div`
  padding: 0 1em;
  width: 700px;

  @media(max-width: 700px){
    width: 100%;
  }

`;

ReactDOM.render(
  <Page>
    <Header />
    <StackGenerator />
  </Page>,
  document.getElementById('root')
);
