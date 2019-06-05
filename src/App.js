import React, { Component } from 'react'
import OptionBox from './components/OptionBox';
import rock from './components/images/cave.png'
import paper from './components/images/paper-plane.png'
import scissors from './components/images/scissors.png'
import {Container, Header, Divider, Grid} from 'semantic-ui-react'

export class App extends Component {
  state = {userChoice: null, 
  compChoice: null,
  userScore: 0, 
  compScore: 0,  
}; 

// Handle user click option
  optionClick = () => {
    debugger
  }


  // Generate a random choice
  randomChoice = () => {
    const choices = ['rock', 'paper', 'scissors']; 
    return choices[Math.floor(Math.random() * choices.length)]; 
  }

  render() {
    return (
      <Container style={{marginTop: "15px", letterSpacing: "2px",}}>
        <Header textAlign="center" size="huge">Rock Paper Scissors</Header>
        <Divider/>
        <Grid columns="equal">
        <Grid.Column>
          <OptionBox name="rock" image={rock} optionClick={this.optionClick}/>
        </Grid.Column>
        <Grid.Column>
          <OptionBox name="rock" image={paper} optionClick={this.optionClick}/>
        </Grid.Column>
        <Grid.Column>
          <OptionBox name="rock" image={scissors} optionClick={this.optionClick}/>
        </Grid.Column>
        </Grid>
      </Container>
    )
  };
};

export default App

