import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGraphs, getCurrentGraphs } from '../../actions/graphs';

const EditGraphs = ({ graphs: { graphs, loading }, createGraphs, getCurrentGraphs,  history }) => {
  const [formData, setFormData] = useState({
    readmin: '',
    patFall: '',
    medErr: '',
    recommnend: '',
    admin: '',
    avgDailyCensus: '',
    avgLOS: '',
    labor: '',
    margin: '',
    netRev: '',
    currRatio: '',
    debtCap: ''
  });

  // const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentGraphs();

    setFormData({
      readmin: loading || !graphs.readmin ? '' : graphs.readmin,
      patFall: loading || !graphs.patFall ? '' : graphs.patFall,
      medErr: loading || !graphs.medErr ? '' : graphs.medErr,
      recommend: loading || !graphs.recommend ? '' : graphs.recommend,
      admin: loading || !graphs.admin ? '' : graphs.admin,
      avgDailyCensus:
        loading || !graphs.avgDailyCensus ? '' : graphs.avgDailyCensus,
      avgLOS: loading || !graphs.avgLOS ? '' : graphs.avgLOS,
      labor: loading || !graphs.social ? '' : graphs.social.labor,
      margin: loading || !graphs.social ? '' : graphs.social.margin,
      debtCap: loading || !graphs.social ? '' : graphs.social.debtCap,
      netRev: loading || !graphs.social ? '' : graphs.social.netRev,
      currRatio: loading || !graphs.social ? '' : graphs.social.currRatio
    });
  }, [loading, getCurrentGraphs]);

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
    debtCap,
    netRev,
    currRatio
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createGraphs(formData, history, true)
  }

  return (
    <Fragment>
      <h1 className="large text-primary">
          Create Your Graphs
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
              >30-Day Recommendation Rate</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="patFall" name="patFall" value={patFall} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Patient Fall Rate</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="medErr" name="medErr" value={medErr} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Medication Error Rate</small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="recommend" name="recommend" value={recommend} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Patient Willingness to Recommend </small
            >
          </div>
          <div className="form-group">
            <input type="text" placeholder="* admin" name="admin" value={admin} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Admissions</small
            >
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Average Daily Census"
              name="avgDailyCensus"
              value={avgDailyCensus} onChange={e => onChange(e)}
            />
            <small className="form-text"
              >Average Daily Census</small
            >
          </div>

          <div className="form-group">
            <input type="text" placeholder="LOS" name="avgLOS" value={avgLOS} onChange={e => onChange(e)}/>
            <small className="form-text"
              >Average LOS</small
            >
          </div>

          <div className="form-group">
            <i className="fab fa-labor fa-2x"></i>
            <input type="text" placeholder="labor URL" name="labor" value={labor} onChange={e => onChange(e)}/>
            <small className="form-text">Labor</small>

          </div>
          <div className="form-group">
            <i className="fab fa-margin fa-2x"></i>
            <input type="text" placeholder="margin URL" name="margin" value={margin} onChange={e => onChange(e)}/>
            <small className="form-text">Margin</small>

          </div>

          <div className="form-group">
            <i className="fab fa-netRev fa-2x"></i>
            <input type="text" placeholder="netRev URL" name="netRev" value={netRev} onChange={e => onChange(e)}/>
            <small className="form-text">Current Ratio</small>

          </div>

          <div className="form-group">
            <i className="fab fa-debtCap fa-2x"></i>
            <input type="text" placeholder="debtCap URL" name="debtCap" value={debtCap} onChange={e => onChange(e)}/>
            <small className="form-text">Debt to Capitalization</small>

          </div>

          <div className="form-group">
            <i className="fab fa-currRatio fa-2x"></i>
            <input type="text" placeholder="currRatio URL" name="currRatio" value={currRatio} onChange={e => onChange(e)}/>
            <small className="form-text">Current Ratio</small>
          </div>



          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="admin/dashboard">Go Back</Link>
        </form>
    </Fragment>
  )
};



EditGraphs.propTypes = {
  CreateGraphs: PropTypes.func.isRequired,
  getCurrentGraphs: PropTypes.func.isRequired,
  graphs: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  graphs: state.graphs
});

export default connect(mapStateToProps, { createGraphs, getCurrentGraphs })(withRouter(EditGraphs));
