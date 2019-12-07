import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { getGraphs } from '../../actions/graphs';
import Spinner from 'components/layout/Spinner';
import { connect } from 'react-redux';
import GraphItem from 'components/graphs/GraphItem';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'react-bootstrap';

const GraphGetter = ({
  getGraphs,
  graphs: { graphs, loading }
}) => {
  useEffect(() => {
    getGraphs();
  }, [getGraphs]);

    return (
      <Fragment>
        {graphs === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className='profiles'>
              {graphs.length > 0 ? (
                graphs.map(graph => (
                  <GraphItem key={graph._id} graph={graph} />
                ))
              ) : (
                <h4>No profiles found...</h4>
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
}

GraphGetter.propTypes = {
  getGraphs: PropTypes.func.isRequired,
  graphs: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  graphs: state.graphs
});



export default connect(
  mapStateToProps,
  { getGraphs }
)(GraphGetter);
