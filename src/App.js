import React, { Component } from 'react'
import OptionBox from './components/OptionBox';
import GameLogic from './components/GameLogic'; 
import {Container, Header, Divider, Grid} from 'semantic-ui-react'

export class App extends Component {
  state = {userChoice: null, 
  compChoice: null,
  userScore: 0, 
  compScore: 0,  
}; 

// Handle user click option
  optionClick = (option) => {
    this.setState({ userChoice: option, compChoice: this.randomChoice()}); 
  }; 


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
        <OptionBox optionClick={this.optionClick}/>
        </Grid>
      </Container>
    )
  };
};

export default App

