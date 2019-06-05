import React from 'react';
import rock from './images/cave.png'
import paper from './images/paper-plane.png'
import scissors from './images/scissors.png'
import { Image, Segment, Grid } from 'semantic-ui-react';

const OptionBox = (props) => (
  <React.Fragment>
        <Grid.Column>
          <Segment circular style={{border: "solid 5px purple" }}>
          <Image size="small" name="rock" src={rock} onClick={() => props.optionClick('rock')}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment circular style={{border: "solid 5px purple" }}>
          <Image size="small" name="paper" src={paper} onClick={() => props.optionClick('paper')}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment circular style={{border: "solid 5px purple" }}>
          <Image size="small" name="scissors" src={scissors} onClick={() => props.optionClick('scissors')}/>
          </Segment>
        </Grid.Column>
    </React.Fragment>
);

export default OptionBox;
