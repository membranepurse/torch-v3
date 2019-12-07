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

const HospitalCard = ({ graph,
   graph: {
     user: { _id, name }
   } }) => {

    return (
      <div>
        <h2>{name} Scorecard</h2>
        <div className="flexcontainer borders">
          <Card>
            <Card.Body>
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

HospitalCard.propTypes = {
  graph: PropTypes.object.isRequired,
};


export default HospitalCard;
