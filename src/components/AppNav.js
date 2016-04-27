import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

export default class AppNav extends Component {
  render() {
    const { auth, logout } = this.props;
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
            <NavItem eventKey={1} href="/orgs" onClick={() => browserHistory.push('/orgs')}>Organizations</NavItem>
            <NavItem eventKey={2} href="/events" onClick={() => browserHistory.push('/events')}>Events</NavItem>
          </Nav>
          <Nav pullRight>
            {auth.isLoggedIn &&
              <NavDropdown eventKey={3} title={'Hello, ' + auth.username + '!'} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="#">My Profile</MenuItem>
                <MenuItem eventKey={3.2} href="#">My Organizations</MenuItem>
                <MenuItem eventKey={3.3} href="#">My Events</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="/login" onClick={() => logout()}>Logout</MenuItem>
              </NavDropdown>
            }
            {!auth.isLoggedIn &&
              <NavItem eventKey={1} href="/login" onClick={() => browserHistory.push('/login')}>
                Login
              </NavItem>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

AppNav.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}
