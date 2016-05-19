import React, { PropTypes, Component } from 'react';
import EventTimeListItem from './EventTimeListItem';

type Props = {
  hosts: PropTypes.object.isRequired
};
export class EventTimeList extends Component {
  props: Props;

  render () {
  const { hosts } = this.props;
  return (
    <div>
    <h2>Times</h2>
    <ul style={{paddingLeft:"1em"}}>
      {Object.keys(hosts).map((id) =>
        <li style={{listStyleType: "none"}}>
          <hr style={{borderColor:"black"}}/>
          <b>{hosts[id].name}</b>:
          <ul style={{display:"inline-block",overflowX:"scroll",whiteSpace:"nowrap",width:"100%"}} className="well">
            {hosts[id].times.map((time) =>
              <EventTimeListItem id={time.id} time={time}/>
            )}
          </ul>
        </li>
      )}
    </ul>
    </div>
  )
  }
};

export default EventTimeList;

