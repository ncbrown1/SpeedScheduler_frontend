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
    org: PropTypes.object.isRequired,
    onOrgClick: PropTypes.func.isRequired
};
export class EventListItem extends React.Component {
  props: Props;

  render () {
    const { org, onOrgClick } = this.props;
    return (
      <li key={org.id} style={listItemStyle}>
        <span style={{display:"inline-block"}}>
          {org.name} &nbsp;
          <a onClick={onOrgClick} style={{cursor:"pointer"}}>Show >></a>
        </span>
      </li>
    )
  }
}

export default EventListItem

