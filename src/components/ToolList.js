import React from 'react';
import styled from 'styled-components';
import Tool from './Tool';

const List = styled.ul`
  padding: 0;
  list-style: none;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media(max-width: 750px){
    flex-direction: column;
  }
`;

const ListItem = styled.li`
  margin: 1em;
  width: 100px;
  flex-grow: 1;
`;

export default class ToolList extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const toolItems = this.props.tools.map((tool) => 
      <ListItem key={tool.name}>
        <Tool img={require('images/' + tool.img)} name={tool.name} />
      </ListItem>
    );

    return (
      <List>
        { toolItems } 
      </List>
    );
  }
}
