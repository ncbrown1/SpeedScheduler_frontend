import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Search from './Search';
import { fetchOrgs } from '../actions/entities';

class AllOrgs extends Component {

  componentDidMount() {
    const { orgs, fetchOrgs } = this.props;
    if (Object.keys(orgs).length == 0) {
      fetchOrgs();
    }
  }

  render() {
    const { orgs } = this.props;
    return (
      <div>
        <h1>All Orgs Page</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
        <Search onSearch={(q) => console.log("passed a function with", q) } />
        {/*<p>{JSON.stringify(this.props)}</p>*/}
        <ul>
        {Object.keys(orgs).map((id) =>
          <li key={id} style={{background:"white", margin:"1em", listStyleType:"none", padding:"1em", marginLeft:"-25px",
    boxShadow: "3px 3px 5px #888888"}}>
            <span style={{display:"inline-block"}}>
              {orgs[id].name} &nbsp;
              <a onClick={() => browserHistory.push('/orgs/'+orgs[id].slug)} style={{cursor:"pointer"}}>Show >></a>
            </span>
          </li>
        )}
        </ul>
      </div>
    );
  }
};

AllOrgs.propTypes = {
  orgs: PropTypes.object.isRequired,
  fetchOrgs: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    orgs: state.entities.orgs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOrgs: () => dispatch(fetchOrgs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOrgs);