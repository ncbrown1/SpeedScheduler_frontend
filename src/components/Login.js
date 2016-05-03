import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { loginUser } from '../actions/auth';

class Login extends Component {
  render() {
    const { auth, next } = this.props;
    if (auth.isLoggedIn) {
      browserHistory.push(next ? next : '/');
    }
    return (
      <form className="main-form" onSubmit={this.handleLogin}>
        <h1>Sign In</h1>
        <label for="username">Username:</label>
        <input type="text" ref="username" className="form-control" placeholder="Username" />
        <label for="password">Password:</label>
        <input type="password" ref="password" className="form-control" placeholder="Password" />
        <br/>
        <button onClick={(event) => this.handleLogin(event)} className="btn btn-social btn-primary form-control" style={{textAlign:"left"}}>
          <span className="fa fa-user"></span>
          Sign in
        </button>
        <br/>
        <button onClick={(event) => this.handleOAuth(event)} className="btn btn-social btn-google form-control">
          <span className="fa fa-google"></span>
          Sign in with Google
        </button>
      </form>
    );
  }

  handleLogin(event) {
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = {
      username: username.value.trim(),
      password: password.value.trim()
    };
    this.props.loginUser(creds);
  }

  handleOAuth(event) {
    console.log();
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  next: PropTypes.string
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (creds) => dispatch(loginUser(creds))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);