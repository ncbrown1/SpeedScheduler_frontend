import React, { PropTypes, Component } from 'react';
import EventHostListItem from './EventHostListItem';

type Props = {
    hosts: PropTypes.object.isRequired
};
export class EventHostList extends Component {
  props: Props;

  render () {
    const { hosts } = this.props;
    return (
      <div>
        <h2>Hosts</h2>
        <ul style={{paddingLeft:"1em"}}>
        {hosts && Object.keys(hosts).map((id) =>
            <EventHostListItem id={id} host={hosts[id]}/>
        )}
        {(hosts == undefined || Object.keys(hosts).length == 0) &&
            <b>No Event Hosts yet...</b>
        }</ul>
      </div>
    )
  }
};

export default EventHostList;

