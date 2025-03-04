import React from 'react'
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>


      <Navbar collapseOnSelect expand="lg" className="bg-success rounded rounded-5 my-4 mx-3 " >
        <Container>
          <Navbar.Brand href="/" className="fw-bolder fs-1 text-light">NextPlan</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className='me-5 fw-bolder fs-6 text-light'>HOME</Nav.Link>
              <Nav.Link href="/testimonials" className='me-5 fw-bolder fs-6 text-light'>TESTIMONIALS</Nav.Link>
              <Nav.Link href="/contact" className='me-5 fw-bolder fs-6 text-light'>CONTACT</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Link to={'/login'}><Button className='btn btn-primary rounded rounded-5 px-5 py-2'>Login</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}

export default Header