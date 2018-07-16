import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
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
    <LinkContainer to="/page-2/"><NavItem eventKey={1}>About</NavItem></LinkContainer>
    <LinkContainer to="/page-3/"><NavItem eventKey={2}>Contact-Us</NavItem></LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>


)

export default myNav
