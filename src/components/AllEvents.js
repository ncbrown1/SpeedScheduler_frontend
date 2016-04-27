import React from 'react';
import { Link } from 'react-router';

export default class AllEvents extends React.Component {
  render() {
    const org = this.props.params.org;
    return (
      <div>
        <h1>All Events {org ? "For " + org : "Page"}</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
};