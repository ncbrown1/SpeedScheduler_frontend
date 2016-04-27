import React from 'react';
import { Link } from 'react-router';

export default class AllOrgs extends React.Component {
  render() {
    return (
      <div>
        <h1>All Orgs Page</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
};