import React from 'react';
import styled from 'styled-components';
import ProjectDescription from './ProjectDescription';
import ToolList from './ToolList';
import tools from '../../data/tools.json';

const Paragraph = styled.p`
  font-family: 'Open Sans', sans-serif;
`;

const Button = styled.button`
  background-color: #445e93;
  border-radius: 8px;
  color: #fff;
  border: none;
  padding: .5em 1em;
  outline: 0;
  cursor: pointer;

  &:hover {
    background-color: #0e285d; 
  }
`;

export default class StackGenerator extends React.Component {

  constructor(props){
    super(props);
    
    this.state = { list: [] };
    this.generateStack = this.generateStack.bind(this);
  }

  pickRandom(items){
    return items[ Math.floor( Math.random() * Math.floor(items.length)) ];
  }

  generateStack(){
    // Here the magic happens
    const newStack = [];
    
    newStack.push(this.pickRandom(tools.styling));
    newStack.push(this.pickRandom(tools.frontend));
    newStack.push(this.pickRandom(tools.data));
    newStack.push(this.pickRandom(tools.backend));
    newStack.push(this.pickRandom(tools.database));
    
    this.setState({ list: newStack });
  }
  
  render(){
    return (
      <React.Fragment>
        <Paragraph>
          Click the generate button to have the perfect, reliable, bug-free web stack.
        </Paragraph>
        <Button onClick={this.generateStack}>Generate</Button>
        <ToolList tools={this.state.list} />
      </React.Fragment>
    );
  }
}
