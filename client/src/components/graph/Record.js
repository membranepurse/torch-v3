import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'react-bootstrap';

const Record = ({
  graph
 }) => {

    return (
      <Fragment>


          <thead className="text-primary">
            <tr>
              <th>{graph.readmin}</th>
              <th>Country</th>
              <th>City</th>
              <th className="text-center">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dakota Rice</td>
              <td>Niger</td>
              <td>Oud-Turnhout</td>
              <td className="text-center">$36,738</td>
            </tr>
            <tr>
              <td>Minerva Hooper</td>
              <td>Curaçao</td>
              <td>Sinaai-Waas</td>
              <td className="text-center">$23,789</td>
            </tr>
            <tr>
              <td>Sage Rodriguez</td>
              <td>Netherlands</td>
              <td>Baileux</td>
              <td className="text-center">$56,142</td>
            </tr>
            <tr>
              <td>Philip Chaney</td>
              <td>Korea, South</td>
              <td>Overland Park</td>
              <td className="text-center">$38,735</td>
            </tr>
            <tr>
              <td>Doris Greene</td>
              <td>Malawi</td>
              <td>Feldkirchen in Kärnten</td>
              <td className="text-center">$63,542</td>
            </tr>
            <tr>
              <td>Mason Porter</td>
              <td>Chile</td>
              <td>Gloucester</td>
              <td className="text-center">$78,615</td>
            </tr>
            <tr>
              <td>Jon Porter</td>
              <td>Portugal</td>
              <td>Gloucester</td>
              <td className="text-center">$98,615</td>
            </tr>
          </tbody>
      </Fragment>
    );
}

Record.propTypes = {
  graph: PropTypes.object.isRequired
}



export default Record;
