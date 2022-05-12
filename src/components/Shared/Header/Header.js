import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HiUserCircle,HiShoppingCart } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import './Header.css'

export const Header = () => {
  return (
    <div className='shadow-sm'>
        <Navbar bg="white" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><span className='monkey-title'><FiGithub></FiGithub> monkeyfood</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto d-flex align-items-center">
        <Link to="/" className='border-start text-decoration-none px-3 monkey-text'><span className='text-muted '><small>BN</small></span></Link>
        <Link to="/" className='border-end border-start text-decoration-none px-3 monkey-text'><small><span className='user-icon'><HiUserCircle></HiUserCircle></span> <span>LOGIN</span></small></Link>
        <Link to="/" className='border-end text-decoration-none px-3 monkey-text'><small><span className='fs-5'><HiShoppingCart></HiShoppingCart></span></small></Link>
        
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
