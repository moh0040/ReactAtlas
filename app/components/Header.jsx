import React from 'react';

import { Navbar, Nav, NavItem   } from 'react-bootstrap';



var Header = (props) => {
  return (
    <Navbar>
        <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">Details</NavItem>
        </Nav>
    </Navbar>
  )
};

module.exports = Header;
