import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGraphs } from '../../actions/graphs';

const CreateGraphs = ({ createGraphs, history }) => {
  const [formData, setFormData] = useState({
    readmin: '',
    patFall: '',
    medErr: '',
    recommend: '',
    admin: '',
    avgDailyCensus: '',
    avgLOS: '',
    labor: '',
    margin: '',
    netRev: '',
    currRatio: '',
    debtCap: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    readmin,
    patFall,
    medErr,
    recommend,
    admin,
    avgDailyCensus,
    avgLOS,
    labor,
    margin,
    netRev,
    currRatio,
    debtCap
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createGraphs(formData, history)
  }

  return (
    <Fragment>
      <h1 className="large text-primary">
          Create Your Profile
        </h1>
        <p className="lead">
          <i className="fas fa-user"></i> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" placeholder="readmin" name="readmin" value={readmin} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="patFall" name="patFall" value={patFall} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own or a readmin patFall</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="medErr" name="medErr" value={medErr} onChange={e => onChange(e)}/>
            <small className="form-text"
              >City & state suggested (eg. Boston, MA)</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="recommend" name="recommend" value={recommend} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="admin" name="admin" value={admin} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="avgDailyCensus" name="avgDailyCensus" value={avgDailyCensus} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="avgLOS" name="avgLOS" value={avgLOS} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="labor" name="labor" value={labor} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="margin" name="margin" value={margin} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="netRev" name="netRev" value={netRev} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="currRatio" name="currRatio" value={currRatio} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="debtCap" name="debtCap" value={debtCap} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Could be your own readmin or one you work for</small
            >
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="admin/dashboard">Go Back</Link>
        </form>
    </Fragment>
  )

}

CreateGraphs.propTypes = {
  CreateGraphs: PropTypes.func.isRequired
}

export default connect(null, { createGraphs })(withRouter(CreateGraphs));
