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
    console.log("Generate stack()");
    // Here the magic happens
    const newStack = [];
    
    newStack.push(this.pickRandom(tools.styling));
    newStack.push(this.pickRandom(tools.frontend));
    newStack.push(this.pickRandom(tools.data));
    newStack.push(this.pickRandom(tools.backend));
    newStack.push(this.pickRandom(tools.database));
    
    console.log("generated stack:");
    console.log(newStack);

    this.setState({ list: newStack });
  }
  
  render(){
    return (
      <React.Fragment>
        <Paragraph>
          Please describe your project below, so our AI (also known as if-else 
          statements) can pick for you the perfect, reliable, bug-free web stack.
        </Paragraph>
        <ProjectDescription />
        <Button onClick={this.generateStack}>Generate</Button>
        <ToolList tools={this.state.list} />
      </React.Fragment>
    );
  }
}
