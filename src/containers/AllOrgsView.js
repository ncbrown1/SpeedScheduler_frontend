import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import OrgListItem from '../components/OrgListItem';
import Search from '../components/Search';
import { fetchOrgs } from '../ducks/orgs';

type Props = {
  orgs: PropTypes.object.isRequired,
  fetchOrgs: PropTypes.func.isRequired
};
export class AllOrgsView extends React.Component {
  props: Props;

  componentDidMount() {
    const { orgs, fetchOrgs } = this.props;
    if (Object.keys(orgs).length == 0) {
      fetchOrgs();
    }
  }

  render () {
    const { orgs } = this.props;
    return (
      <div className="container">
        <h1>All Orgs Page</h1>
        <Search onSearch={(q) => console.log("passed ", q)} />
        <ul>
          {Object.keys(orgs).map((id) =>
            <OrgListItem
              org={orgs[id]}
              onOrgClick={() => browserHistory.push('/orgs/'+orgs[id].slug)} />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orgs: state.orgs.byId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrgs: () => dispatch(fetchOrgs())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllOrgsView)
