import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGraphById } from '../../actions/graphs';
import Scorecard from './Scorecard';

const Graph = ({
  getGraphById,
  graph: { graph, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getGraphById(match.params.id);
  }, [getGraphById, match.params.id]);

  return (
    <Fragment>
      {graph === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/admin/tables' className='btn btn-light'>
            Back To Graphs
          </Link>

        </Fragment>
      )}
    </Fragment>
  );
};

Graph.propTypes = {
  getGraphById: PropTypes.func.isRequired,
  graph: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  graph: state.graphs,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getGraphById }
)(Graph);
