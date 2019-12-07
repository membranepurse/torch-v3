import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getCurrentGraphs } from '../actions/graphs';
import { connect } from 'react-redux';
import Record from '../components/graph/Record';
import Spinner from '../components/layout/Spinner';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

const bStyle = {
  fontWeight: 'bold',
  fontSize: '18px'
}

const Tables = ({
  getCurrentGraphs,
  graphs: {graph, loading }
}) => {
  useEffect(() => {
    getCurrentGraphs();
  }, [getCurrentGraphs]);

    return (
      <div className="content">
        <Row>

          <Col md="12">
          <Card className="card-plain">
            <CardHeader>
              <CardTitle tag="h4">Quality Experience</CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <Fragment>
                  {graph === null || loading ? (
                    <Spinner />
                  ) : (
                    <Fragment>
                      <thead className="text-primary">
                        <tr>
                          <th></th>
                          <th></th>

                          <th className="hide-sm">Rural TX</th>
                          <th className="hide-sm">Benchmark</th>
                          <th className="hide-sm">Our Target</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>30-Day Readmission Rate: </td>
                        <td style={bStyle}>{graph.readmin} % </td>
                        <td>
                          18.2%
                        </td>
                        <td>less than 10%</td>
                        <td>less than 15%</td>
                      </tr>
                      <tr>
                        <td>Patient Fall Rate: </td>
                        <td style={bStyle}>{graph.patFall} % </td>
                        <td className="hide-sm">5.0</td>
                        <td>6.2/1k pts.</td>
                        <td>less than 4.1/qtr.</td>
                      </tr>
                      <tr>
                        <td>Medication Error Rate: </td>
                        <td style={bStyle}>{graph.medErr} %</td>
                        <td className="hide-sm">10.5%</td>
                        <td>less than 5.0</td>
                        <td>less than 5.0</td>
                      </tr>
                      <tr>
                        <td>
                        Patient Willingness to recommend:
                        </td>
                        <td style={bStyle}>{graph.recommend} %</td>
                        <td className="hide-sm">73.4%</td>
                        <td>72.0%</td>
                        <td>85.0%</td>
                      </tr>
                      </tbody>
                    </Fragment>
                  )}
                </Fragment>
              </Table>
            </CardBody>
          </Card>
          </Col>

          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Operation</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <Fragment>
                    {graph === null || loading ? (
                      <Spinner />
                    ) : (
                      <Fragment>
                        <thead className="text-primary">
                          <tr>
                            <th></th>
                            <th></th>

                            <th className="hide-sm">Rural TX</th>
                            <th className="hide-sm">Benchmark</th>
                            <th className="hide-sm">Our Target</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Admissions: </td>
                          <td style={bStyle}>{graph.readmin} % </td>
                          <td>
                            18.2%
                          </td>
                          <td>less than 10%</td>
                          <td>less than 15%</td>
                        </tr>
                        <tr>
                          <td>Avg. Daily Census: </td>
                          <td style={bStyle}>{graph.patFall} % </td>
                          <td className="hide-sm">5.0</td>
                          <td>6.2/1k pts.</td>
                          <td>less than 4.1/qtr.</td>
                        </tr>
                        <tr>
                          <td>Avg. Length of Stay: </td>
                          <td style={bStyle}>{graph.medErr} %</td>
                          <td className="hide-sm">10.5%</td>
                          <td>less than 5.0</td>
                          <td>less than 5.0</td>
                        </tr>
                        <tr>
                          <td>
                          Labor as % of Exp. :
                          </td>
                          <td style={bStyle}>{graph.recommend} %</td>
                          <td className="hide-sm">73.4%</td>
                          <td>72.0%</td>
                          <td>85.0%</td>
                        </tr>
                        </tbody>
                      </Fragment>
                    )}
                  </Fragment>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Finance</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <Fragment>
                    {graph === null || loading ? (
                      <Spinner />
                    ) : (
                      <Fragment>
                        <thead className="text-primary">
                          <tr>
                            <th></th>
                            <th></th>

                            <th className="hide-sm">Rural TX</th>
                            <th className="hide-sm">Benchmark</th>
                            <th className="hide-sm">Our Target</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Total Margin: </td>
                          <td style={bStyle}>{graph.readmin} % </td>
                          <td>
                            18.2%
                          </td>
                          <td>less than 10%</td>
                          <td>less than 15%</td>
                        </tr>
                        <tr>
                          <td>Net Rev. as % of Gross: </td>
                          <td style={bStyle}>{graph.patFall} % </td>
                          <td className="hide-sm">5.0</td>
                          <td>6.2/1k pts.</td>
                          <td>less than 4.1/qtr.</td>
                        </tr>
                        <tr>
                          <td>Current Ratio: </td>
                          <td style={bStyle}>{graph.medErr} %</td>
                          <td className="hide-sm">10.5%</td>
                          <td>less than 5.0</td>
                          <td>less than 5.0</td>
                        </tr>
                        <tr>
                          <td>
                          Debt to Capitalization:
                          </td>
                          <td style={bStyle}>{graph.recommend} %</td>
                          <td className="hide-sm">73.4%</td>
                          <td>72.0%</td>
                          <td>85.0%</td>
                        </tr>
                        </tbody>
                      </Fragment>
                    )}
                  </Fragment>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>



    );
}

Tables.propTypes = {
  getCurrentGraphs: PropTypes.func.isRequired,
  graphs: PropTypes.object.isRequired,


}

const mapStateToProps = state => ({
  graphs: state.graphs
});



export default connect(
  mapStateToProps,
  { getCurrentGraphs }
)(Tables);
