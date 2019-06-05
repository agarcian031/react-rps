import React from 'react';
import { Segment, Header, } from 'semantic-ui-react';

class GameOutcome extends React.Component {
  state = { 
    outcome: null, 
  };



  render() {
    return(
      <Segment raised padded color="purple">
        <Header textAlign="center" color="purple">You picked {this.props.values.userChoice.toUpperCase()}</Header>
        <Header textAlign="center" color="purple">You picked {this.props.values.compChoice.toUpperCase()}</Header>
        <Header textAlign="center" color="purple">You {this.props.values.outcome}</Header>
      </Segment>
    )
  }
}

export default GameOutcome;

