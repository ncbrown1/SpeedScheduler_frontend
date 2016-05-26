import React, { PropTypes, Component } from 'react';

type Props = {
    id: PropTypes.integer.isRequired,
    time: PropTypes.object.isRequired
};
export class EventTimeListItem extends Component {
  props: Props;

  render () {
    const { id, time } = this.props;
    const style = {
        display: 'inline-block',
        // padding: '0.5em',
        margin: '0.1em',
        background:"#ddd",
        // boxShadow: "2px 2px 3px #888888",
        textAlign: "center"
    };
    const pstyle = {
        margin:0,
        padding:0
    };
    const astyle = {
        cursor:"pointer"
    }
    let d1 = new Date(Date.parse(time.start_time));
    let d2 = new Date(Date.parse(time.end_time));
    return (
      <li key={id} style={style} className="well">
        {/*<p style={pstyle}><b>Date:</b> {time.date}</p>*/}
        <p style={pstyle}><b>Start:</b> {d1.toDateString()}</p>
        <p style={pstyle}><b>Start:</b> {d1.toLocaleTimeString()}</p>
        <p style={pstyle}><b>End:</b> {d2.toDateString()}</p>
        <p style={pstyle}><b>End:</b> {d2.toLocaleTimeString()}</p>
        <p style={pstyle}><a style={astyle}>Sign up</a></p>
      </li>
    )
  }
};

export default EventTimeListItem;

