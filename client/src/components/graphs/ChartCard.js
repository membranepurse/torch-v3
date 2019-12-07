import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Line from './Line';
import { getGraphs } from '../../actions/graphs';
import { connect } from 'react-redux';


class ChartCard extends Component {

constructor(props){
  super(props);
  this.state = {
    appearHome: true,
    getGraphs
  }
}

toggleAppear = () => {
  this.setState({
    appearHome: !this.state.appearHome
  })
}

  render () {
    return (
      <Card style={{ width: '500px' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Line/>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }


}

export default ChartCard;
