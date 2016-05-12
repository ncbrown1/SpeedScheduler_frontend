import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import EventListItem from '../components/EventListItem';
import Search from '../components/Search';
import { fetchEvents } from '../ducks/events';

type Props = {
  events: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func.isRequired
};
export class AllEventsView extends React.Component {
  props: Props;

  componentDidMount() {
    const { events, fetchEvents } = this.props;
    if (Object.keys(events).length == 0) {
      fetchEvents();
    }
  }

  render () {
    const org = this.props.params.org;
    const { events } = this.props;
    return (
      <div className="container">
        <h1>All Events {org ? "For " + org : ""}</h1>
        <Search onSearch={(q) => console.log("passed ", q)} />
        <ul>
          {Object.keys(events).map((id) =>
            <EventListItem
              event={events[id]}
              onEventClick={() => browserHistory.push('/events/'+id)} />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.byId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllEventsView)
