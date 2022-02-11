import React from 'react';
// import Logo from './logo';
import '../styles/app.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar: React.FC = () => {
    return (
        // <div>
        <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
        <Navbar.Brand href="#home">WAVELENGTH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#deliverables">PROCESS</Nav.Link>
            <Nav.Link href="#team">TEAM</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        // </div>
    );
};

export default NavBar;
