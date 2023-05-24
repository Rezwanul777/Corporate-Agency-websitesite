import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import Head from './Head';

const Header = () => {
  return (
    <>
       <Head/>
    <Navbar bg="light" expand="lg">

    <Container>
    <Navbar.Brand as={Link} to="/">
    <img  src={logo} height={120} width={160} alt="logo is not found" />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#works">Works</Nav.Link>
          <Nav.Link href="#teams">Team</Nav.Link>
          <Nav.Link href="#verification">Verification</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
    
  )
}

export default Header