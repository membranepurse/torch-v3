import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GraphItem = ({
  graph: {
    user: { _id, name },
    recommend,
    avgLOS,
    avgDailyCensus
  }
}) => {
  return (
    <div className='profile bg-light'>
        <Link to={`/graph/${_id}`} className='btn btn-primary'>
          View {name}'s Graph
        </Link>
    </div>
  );
};

GraphItem.propTypes = {
  graph: PropTypes.object.isRequired
};

export default GraphItem;
