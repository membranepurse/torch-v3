import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GraphItem from './GraphItem';
import Scorecard from './Scorecard';
import { getGraphs } from '../../actions/graphs';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';



const Graphs = ({
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
					<Link to='/graphs' className='btn btn-light'>
						Back To Graphs
					</Link>
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

Graphs.propTypes = {
  getGraphs: PropTypes.func.isRequired,
  graphs: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  graphs: state.graphs
});



export default connect(
  mapStateToProps,
  { getGraphs }
)(Graphs);
