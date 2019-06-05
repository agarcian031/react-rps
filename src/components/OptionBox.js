import React from 'react'
import {Image} from 'semantic-ui-react';

OptionBox = () => (
  <Image src='/images/wireframe/image.png' size='small' />
  // Then put the images in the app js
  <Image src={props.img} size="small" onClick={() => props.optionClick(props.name)/>
); 

export default OptionBox; 
