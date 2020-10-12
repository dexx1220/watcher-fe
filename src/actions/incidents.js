import axios from 'axios'

const baseUrl = 'https://w2nwvvqkp5.execute-api.us-east-1.amazonaws.com/dev/incidents';

const fetchIncidentsSuccess = (incidents) => {
  return {
    type: 'INCIDENTS.SUCCESS',
    payload: incidents
  }
}

const fetchIncidentsFailure = (error) => {
  return {
    type: 'INCIDENTS.FAILURE',
    error
  }
}

export const getIncidents = () => dispatch => {
  return axios.get(baseUrl)
    .then(res => {
      dispatch(fetchIncidentsSuccess(res.data))
    })
    .catch(err => {
      dispatch(fetchIncidentsFailure(err))
    })
}
