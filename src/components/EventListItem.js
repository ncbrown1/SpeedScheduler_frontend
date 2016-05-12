import React, { PropTypes } from 'react'

const listItemStyle = {
    background:"white",
    margin:"1em",
    listStyleType:"none",
    padding:"1em",
    marginLeft:"-25px",
    boxShadow: "3px 3px 5px #888888"
};

type Props = {
    event: PropTypes.object.isRequired,
    onEventClick: PropTypes.func.isRequired
};
export class EventListItem extends React.Component {
  props: Props;

  render () {
    const { event, onEventClick } = this.props;
    return (
      <li key={event.id} style={listItemStyle}>
        <span style={{display:"inline-block"}}>
          {event.name} &nbsp;
          <a onClick={onEventClick} style={{cursor:"pointer"}}>Show >></a>
        </span>
      </li>
    )
  }
}

export default EventListItem

