import React from 'react';
import styled from 'styled-components';
import Tool from './Tool';

const List = styled.ul`
  padding: 0;
  list-style: none;
  font-family: 'Open Sans', sans-serif;
`;

const ListItem = styled.li`
  margin: 2em 0;
`;

export default class ToolList extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const toolItems = this.props.tools.map((tool) => 
      <ListItem key={tool.name}>
        <Tool img={require('images/' + tool.img)} height={100} name={tool.name} />
      </ListItem>
    );

    return (
      <List>
        { toolItems } 
      </List>
    );
  }
}
