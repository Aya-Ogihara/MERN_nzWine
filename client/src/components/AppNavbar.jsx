import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';


function AppNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">nzWine</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Region</Nav.Link>
          <Nav.Link href="/wines">Variety</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
