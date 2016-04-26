import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { resetErrorMessage } from '../actions/errorMessage';
import { logoutUser } from '../actions/auth';
import AppNav from '../components/AppNav';
import Footer from '../components/Footer';


import { fetchUser } from '../actions/entities'; // remove this

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDismissClick = this.handleDismissClick.bind(this);
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`);
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }

    return (
      <div className="alert alert-danger">
        <b>{errorMessage}</b>
        {' '}
        (<a style={{cursor:"pointer"}} onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </div>
    );
  }

  render() {
    const { dispatch, auth, logoutUser, children } = this.props;
    return (
      <div>
        <AppNav auth={auth} logout={() => logoutUser()} />
        <div className="container">
          {this.renderErrorMessage()}
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  auth: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
  // inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage,
    auth: state.auth
    // inputValue: ownProps.location.pathname.substring(1)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetErrorMessage: () => dispatch(resetErrorMessage()),
    logoutUser: () => dispatch(logoutUser()),

    fetchUser: (id) => dispatch(fetchUser(id)) // remove thsi
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
