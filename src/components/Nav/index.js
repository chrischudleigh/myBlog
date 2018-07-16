import React from 'react'
import Link from 'gatsby-link'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
const myNav= () => (
  <Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to="/">Web Bytes</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1}><Link to="/page-2/">About</Link></NavItem>
      <NavItem eventKey={2}><Link to="/page-3/">Contact-Us</Link></NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>


)

export default myNav
