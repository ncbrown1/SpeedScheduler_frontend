import React, { PropTypes, Component } from 'react';

type Props = {
    id: PropTypes.integer.isRequired,
    host: PropTypes.object.isRequired
};
export class EventHostListItem extends Component {
  props: Props;

  render () {
    const { id, host } = this.props;
    const style = {
        display: 'inline-block',
        padding: '0.5em',
        margin: '0.5em',
        background:"white",
        boxShadow: "3px 3px 5px #888888"
    }
    return (
      <li key={id} style={style}>
        <span style={{display:"inline-block", marginRight:"5px"}}>
            <img src="http://placehold.it/60x60"/>
        </span>
        <span style={{display:"inline-block"}}>
            {host.first_name} <br/> ({host.email})
        </span>
      </li>
    )
  }
};

export default EventHostListItem;

