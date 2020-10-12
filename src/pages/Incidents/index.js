import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIncidents } from '../../actions/incidents';

class Incidents extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getIncidents();
  }

  render() {
    return (
      <div>
        <h1>Integration Incidents</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Message</th>
              <th>Service</th>
              <th>Resolved</th>
            </tr>
          </thead>

          <tbody>
            {this.props.incidents.map(i => {
              return(
                <tr>
                  <td>{i._id}</td>
                  <td>{i.date}</td>
                  <td>{i.message}</td>
                  <td>{i.service}</td>
                  <td>{i.resolved.toString()}</td>
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

export default connect(mapStateToProps, { getIncidents })(Incidents);
