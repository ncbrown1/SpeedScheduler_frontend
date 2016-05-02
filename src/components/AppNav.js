import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

export default class AppNav extends Component {
  render() {
    const { auth, logout } = this.props;
    return (
      <Navbar className="AppNav" inverse>
        <Navbar.Header>
          <Navbar.Brand onClick={() => browserHistory.push('/')} className="ss-brand">
            Speed Scheduler
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} onClick={() => browserHistory.push('/orgs')}>Organizations</NavItem>
            <NavItem eventKey={2} onClick={() => browserHistory.push('/events')}>Events</NavItem>
          </Nav>
          <Nav pullRight>
            {auth.isLoggedIn &&
              <NavDropdown eventKey={3} title={'Hello, ' + localStorage.getItem('user_name') + '!'} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="#">My Profile</MenuItem>
                <MenuItem eventKey={3.2} href="#">My Organizations</MenuItem>
                <MenuItem eventKey={3.3} href="#">My Events</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} onClick={() => { logout(); browserHistory.push('/login'); }}>Logout</MenuItem>
              </NavDropdown>
            }
            {!auth.isLoggedIn &&
              <NavItem eventKey={1} onClick={() => browserHistory.push('/login')}>
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
