import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_GRAPHDATA,
  GRAPHDATA_ERROR,
  UPDATE_GRAPHDATA,
  CLEAR_GRAPHDATA,
  GET_GRAPHS,
  DELETE_ACCOUNT
} from './types';

// get current users profile

export const getCurrentGraphs = () => async dispatch => {
  try {
    const res = await axios.get('/api/graphs/me');

    dispatch({
      type: GET_GRAPHDATA,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: GRAPHDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//create or update PROFILE_ERROR

export const createGraphs = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('api/graphs', formData, config);

    dispatch({
      type: GET_GRAPHDATA,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Graphs Updated' : 'Graphs Created', 'success'));

    if(!edit) {
      history.push('admin/dashboard');
    }
  } catch (error) {
    const errors = error.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: GRAPHDATA_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};


// Get all profiles
export const getGraphs = () => async dispatch => {
  dispatch({ type: CLEAR_GRAPHDATA });

  try {
    const res = await axios.get('/api/graphs/all');

    dispatch({
      type: GET_GRAPHS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GRAPHDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// get profile by id
export const getGraphById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/graphs/user/${userId}`);

    dispatch({
      type: GET_GRAPHDATA,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: GRAPHDATA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
