import {
  GET_GRAPHDATA,
  GRAPHDATA_ERROR,
  CLEAR_GRAPHDATA,
  UPDATE_GRAPHDATA,
  GET_GRAPHS
} from '../actions/types';

const initialState = {
  graph: null,
  graphs: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_GRAPHDATA:
    case UPDATE_GRAPHDATA:
      return {
        ...state,
        graph: payload,
        loading: false
      };
    case GET_GRAPHS:
      return {
        ...state,
        graphs: payload,
        loading: false
      };
    case GRAPHDATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_GRAPHDATA:
      return {
        ...state,
        graph: null,
        loading: false
      };
    default:
      return state;
  }
}
