import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvent } from '../ducks/events';
import Loading from '../components/Loading';
import EventHostList from '../components/EventHostList';
import EventTimeList from '../components/EventTimeList';

type Props = {
  events: PropTypes.object.isRequired,
  fetchEvent: PropTypes.func.isRequired
};
export class ShowEventView extends Component {
  props: Props;

  componentWillMount() {
    const eventid = this.props.params.event;
    const { events, fetchEvent } = this.props;
    fetchEvent(eventid);
  }

  render () {
    const eventid = this.props.params.event;
    const { isFetchingEvent, events, fetchEvent } = this.props;

    const hosts = {
      1: {
        name: 'Steve Rogers',
        email: 'teamcap@avengers.gov',
        times: [{
          id: 1,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 2,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 3,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 4,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 5,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 6,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        }]
      },
      2: {
        name: 'Tony Stark',
        email: 'teamironman@avengers.gov',
        times: [{
          id: 7,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 8,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 9,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 10,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 11,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 12,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        }]
      },
      3: {
        name: 'Oliver Queen',
        email: 'greenarrow@dc.org',
        times: [{
          id: 13,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 14,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 15,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 16,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 17,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 18,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 25,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 26,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 27,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 28,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        }]
      },
      4: {
        name: 'Clark Kent',
        email: 'notsuperman@gmail.com',
        times: [{
          id: 19,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 20,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 21,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 22,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 23,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        },{
          id: 24,
          date: '2015-04-06',
          start_time: '08:42 PM',
          end_time: '10:13PM'
        }]
      }
    }


    return (
      <div>
        {isFetchingEvent &&
          <Loading/>
        }
        {!isFetchingEvent &&
          <div className="container">
            <h1>Event: {events[eventid].name}</h1>
            <p>Lorem ipsum vestibulum taciti urna at fermentum velit taciti, enim himenaeos nisi potenti quisque semper lorem vestibulum scelerisque, leo dolor adipiscing luctus nibh magna conubia nam tortor congue pellentesque sed purus vulputate condimentum tempor ipsum, suspendisse turpis consequat blandit pharetra ac sapien pretium facilisis, sodales amet facilisis laoreet cras nulla malesuada est.</p>
            <EventHostList hosts={hosts}/>
            <EventTimeList hosts={hosts}/>
          </div>
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    isFetchingEvent: state.events.isFetching,
    events: state.events.byId
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: (id) => dispatch(fetchEvent(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowEventView);
