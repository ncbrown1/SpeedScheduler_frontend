import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Search from './Search';
import { fetchEvents } from '../actions/entities';

export default class AllEvents extends Component {

  componentDidMount() {
    const { events, fetchEvents } = this.props;
    if (Object.keys(events).length == 0) {
      fetchEvents();
    }
  }

  render() {
    const org = this.props.params.org;
    const { events } = this.props;
    return (
      <div>
        <h1>All Events {org ? "For " + org : "Page"}</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
        <Search onSearch={(q) => console.log("passed a function with", q) } />
        {/*<p>{JSON.stringify(this.props)}</p>*/}
        <ul>
        {Object.keys(events).map((id) =>
          <li key={id} style={{background:"white", margin:"1em", listStyleType:"none", padding:"1em", marginLeft:"-25px",
    boxShadow: "3px 3px 5px #888888"}}>
            <span style={{display:"inline-block"}}>
              {events[id].name} &nbsp;
              <a onClick={() => browserHistory.push('/events/'+id)} style={{cursor:"pointer"}}>Show >></a>
            </span>
          </li>
        )}
        </ul>
      </div>
    );
  }
};

AllEvents.propTypes = {
  events: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    events: state.entities.events
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents);