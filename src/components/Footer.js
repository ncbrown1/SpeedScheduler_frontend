import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Copyright &copy; 2016 SpeedScheduler LLC. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}