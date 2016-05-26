import React, { PropTypes, Component } from 'react';
import EventTimeListItem from './EventTimeListItem';

type Props = {
  hosts: PropTypes.object.isRequired,
  times: PropTypes.array.isRequired,
};
export class EventTimeList extends Component {
  props: Props;

  render () {
  const { hosts, times } = this.props;
  return (
    <div>
    <h2>Times</h2>
    <ul style={{paddingLeft:"1em"}}>
      {hosts && Object.keys(hosts).map((id) =>
        <li style={{listStyleType: "none"}}>
          <hr style={{borderColor:"black"}}/>
          <b>{hosts[id].first_name}</b>:
          <ul style={{display:"inline-block",overflowX:"scroll",whiteSpace:"nowrap",width:"100%"}} className="well">
            {times[id] && times[id].map((time) =>
              <EventTimeListItem id={time.id} time={time}/>
            )}
            {!(times[id]) &&
              <b>No Hosted Event Times yet..</b>
            }
          </ul>
        </li>
      )}
      {(hosts == undefined || Object.keys(hosts).length == 0) &&
        <b>No Hosted Event Times yet..</b>
      }
    </ul>
    </div>
  )
  }
};

export default EventTimeList;

