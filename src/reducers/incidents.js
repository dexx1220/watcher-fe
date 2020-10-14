import { createReducer } from '../utils/createReducer';

export const INITIAL_STATE = {
  incidents: []
}

const reducers = {
  'INCIDENTS.SUCCESS': getIncidents,
}

function getIncidents(state, payload) {
  return {
    ...state,
    incidents: payload
  }
}

export default createReducer(INITIAL_STATE, reducers);
