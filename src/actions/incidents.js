import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/incidents`;

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

const updateIncidentSuccess = (incident) => {
  return {
    type: 'INCIDENT.UPDATE.SUCCESS',
    payload: incident
  }
}

const updateIncidentFailure = (error) => {
  return {
    type: 'INCIDENT.UPDATE.FAILURE',
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

export const updateIncident = (id, status) => dispatch => {
  return axios.patch(`${baseUrl}/${id}`, { resolved: status })
    .then(res => {
      dispatch(getIncidents());
    })
    .catch(err => {
      dispatch(updateIncidentFailure(err))
    })
}