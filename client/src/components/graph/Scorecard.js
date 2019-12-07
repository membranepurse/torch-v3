import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import Chart from './Chart';
import Line from './Line';
import ChartCard from './ChartCard';
import { Link } from 'react-router-dom';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'react-bootstrap';

const Scorecard = ({ graph,
  graph: {
    user: { _id, name }
  }
 }) => {

    return (
        <div className="flexcontainer borders">
          <h1>
            {name} Scorecard
          </h1>
          <Card>
            <Card.Body>
              <Table graph={graph}/>
            </Card.Body>
            <Card.Body>
              <Line/>
            </Card.Body>
            <Card.Body>
              <Chart/>
            </Card.Body>
          </Card>
        </div>
    );
}

Scorecard.propTypes = {
  graph: PropTypes.object.isRequired,
};


export default Scorecard;
