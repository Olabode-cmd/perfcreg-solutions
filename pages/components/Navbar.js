import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// import { HiOutlineMenuAlt3 } from 'react/hi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

export default function Navbars() {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Perfcreg</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <HiOutlineMenuAlt3 />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>About</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Portfolio</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
