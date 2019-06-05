import React, { Component } from 'react'
import OptionBox from './components/OptionBox';
import {Container, Header, Divider} from 'semantic-ui-react'

export class App extends Component {
  state = {userChoice: null, 
  compChoice: null, 
}; 

  optionClick = () => {
    debugger
  }

  render() {
    return (
      <Container style={{marginTop: "15px", letterSpacing: "2px",}}>
        <Header textAlign="center" size="huge">Rock Paper Scissors</Header>
        <Divider/>
        <OptionBox name="rock" image={} optionClick={}/>
      </Container>
    )
  };
};

export default App

