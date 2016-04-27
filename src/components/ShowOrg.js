import React from 'react';
import { Link } from 'react-router';

export default class ShowOrg extends React.Component {
  render() {
    return (
      <div>
        <h1>Show Org Page: {this.props.params.org}</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
};