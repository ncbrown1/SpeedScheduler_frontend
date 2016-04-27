import React from 'react';
import { Link } from 'react-router';

export default class ShowEvent extends React.Component {
  render() {
    return (
      <div>
        <h1>Show Event Page: {this.props.params.event}</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
};