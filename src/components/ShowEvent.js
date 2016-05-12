import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Search from './Search';
import { fetchEvent } from '../ducks/events';

class ShowEvent extends Component {

  componentDidMount() {
    const eventid = this.props.params.event;
    const { events, fetchEvent } = this.props;
    if (events[eventid] === undefined) {
        fetchEvent(eventid);
    }
  }

  render() {
    const eventid = this.props.params.event;
    const { events, fetchEvent } = this.props;
    return (
      <div className="container">
        <h1>Show Event Page: {events[eventid].name}</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
        <p>{JSON.stringify(events[eventid])}</p>
      </div>
    );
  }
};

ShowEvent.propTypes = {
  events: PropTypes.object.isRequired,
  fetchEvent: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    events: state.events.byId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvent: (id) => dispatch(fetchEvent(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);