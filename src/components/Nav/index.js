import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
const myNav= () => (
  <Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand href="#">
    Web Bytes
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1}><NavLink to="/page-2/">About</NavLink></NavItem>
      <NavItem eventKey={2}><NavLink to="/page-3/">Contact-Us</NavLink></NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>


)

export default myNav
