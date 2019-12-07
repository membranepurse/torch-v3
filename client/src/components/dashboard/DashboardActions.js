import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light"
        ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link
      >
      <Link to="/edit-graphs" className="btn btn-light"
        ><i className="fas fa-user-circle text-primary"></i> Edit Graphs</Link
      >
      <Link to="/create-graphs" className="btn btn-light"
        ><i className="fas fa-user-circle text-primary"></i> Create Graphs</Link
      >
      <Link to="/add-experience" className="btn btn-light"
        ><i className="fab fa-black-tie text-primary"></i> Add Experience</Link
      >
      <button className="btn btn-danger">
        <i className="fas fa-user-minus"></i> Delete My Account
      </button>
    </div>
  )
};

export default DashboardActions;
