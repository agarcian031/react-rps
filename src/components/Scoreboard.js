import React, { Fragment, Component } from 'react'
import {Segment, Grid, Divider, Header, } from 'semantic-ui-react'

export class Scoreboard extends Component {
  render() {
    return (
      <Fragment>
      <Segment>
      <Grid columns={2} textAlign='center'>
        <Divider vertical></Divider>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header>
              User: {this.props.userScore}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header>
              Computer: {this.props.compScore}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </Fragment>
    )
  }
}

export default Scoreboard
