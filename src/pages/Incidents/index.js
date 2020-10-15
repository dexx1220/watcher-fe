import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIncidents, updateIncident } from '../../actions/incidents';
import moment from 'moment';
import './index.css';

class Incidents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastRefresh: new Date(),
      currentTime: new Date()
    }
  }

  componentDidMount() {
    this.props.getIncidents();
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      currentTime: new Date()
    })
  }

  render() {
    const timeDiff = (moment(this.state.currentTime)).diff(moment(this.state.lastRefresh), 'minutes');
    const timeUnits = timeDiff > 60 ? 'hour(s)' : 'minute(s)';
    return (
      <div class="container">
        <h1>Cyclr Errors</h1>
        {timeDiff > 0 ?
          <h5>Page last refreshed: {timeDiff} {timeUnits} ago</h5> : null
        }
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Message</th>
              <th>Service</th>
              <th>Resolved</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {this.props.incidents.map(i => {
              return(
                <tr key={i._id}>
                  <td>{i._id}</td>
                  <td>{moment(i.date).format("MMM-DD-YYYY hh:mm A").toString()}</td>
                  <td>{i.message}</td>
                  <td>{i.service}</td>
                  <td>{i.resolved.toString()}</td>
                  <td><button onClick={() => this.props.updateIncident(i._id, !i.resolved)}>Resolve</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.incidents
  }
}

export default connect(mapStateToProps, { 
  getIncidents,
  updateIncident
})(Incidents);
