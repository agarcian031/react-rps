import React from 'react';
import { Image, Segment, } from 'semantic-ui-react';

const OptionBox = (props) => (
  <Segment circular style={{border: "solid 5px purple" }}>
    <Image
    size="small" 
    src={props.image} 
    onClick={ () => props.optionClick(props.name)} 
    />
  </Segment>
);

export default OptionBox;
