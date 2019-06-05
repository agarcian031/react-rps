import React, { Component } from 'react'
import OptionBox from './components/OptionBox';
// import GameLogic from './components/GameLogic'; 
import Scoreboard from './components/Scoreboard';
import {Container, Header, Divider, Grid, Segment} from 'semantic-ui-react'
import GameOutcome from './components/GameOutcome';

export class App extends Component {
  state = {userChoice: null, 
  compChoice: null,
  userScore: 0, 
  compScore: 0,  
}; 

logic = () => {
  const rules = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
  }
  const {userChoice, compChoice} = this.state
  if (userChoice === compChoice) {
    this.setState({outcome: "tie!"})
  } else if (compChoice === rules[userChoice]) {
    this.setState({outcome: "win!", userScore: (this.state.userScore + 1) })
  } else {
    this.setState({outcome: "lose!", compScore: (this.state.compScore + 1)})
  }
}


optionClick = (option) => {
  this.setState(state => {
    return { userChoice: option, compChoice: this.randomChoice() }}, () => {
      this.logic()
    })
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
        <Scoreboard userScore={this.state.userScore} compScore={this.state.compScore}/>
        <Grid columns="equal">
        <OptionBox optionClick={this.optionClick}/>
        </Grid>
        { this.state.outcome && <GameOutcome values={this.state}/>}
      </Container>
    )
  };
};

export default App

