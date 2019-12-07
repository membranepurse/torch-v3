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
   } }) => {

    return (
      <div>
        <h2>{name} Scorecard</h2>
        <Link to={`/graphs/${_id}`} className='btn btn-primary'>
          Next Card
        </Link>
        <div className="flexcontainer borders">
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
      </div>
    );
}

Scorecard.propTypes = {
  graph: PropTypes.object.isRequired,
};


export default Scorecard;
