import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { logoutUser } from '../actions/auth';

export default class AppNav extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand onClick={() => browserHistory.push('/')} >
            <a href="/">Speed Scheduler</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            {auth.isLoggedIn &&
              <Logout onLogoutClick={() => dispatch(logoutUser()) } />
            }
            {!auth.isLoggedIn &&
              <NavItem eventKey={1} href="/login" onClick={() => browserHistory.push('/login')}>
                Some Login Link
              </NavItem>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

AppNav.propTypes = {
  auth: PropTypes.object.isRequired
}