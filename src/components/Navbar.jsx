import React, {Fragment}from 'react';
import { Navbar, Nav, Container, NavDropdown,  NavLink } from 'react-bootstrap';
import logo from '../assets/images/logo.svg'
import '../css/navbar.css'
import {Link} from 'react-router-dom'


const NavbarSite=()=>{

  return(
    <Fragment>
      
      <Navbar collapseOnSelect  className='d-flex justify-content-between fixed-top'bg='darkClear' variant='dark' expand="lg" >
      <Container>
        <Navbar.Brand href='#home'>  
          <img width='200px' height='auto' src={logo} alt="" />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className=' d-lg-flex justify-content-end' id="basic-navbar-nav">
              <Nav >
                <Nav.Link  className='white' href="#home">Home</Nav.Link>

                  {/* <Nav.Link>  */}
                    <NavDropdown  title='Services'>
                        <NavDropdown.Item  href='#home' >Immigration Law</NavDropdown.Item> 
                        <NavDropdown.Item href='#familyLaw'>Family Law</NavDropdown.Item> 
                        <NavDropdown.Item href='#divorceLaw'>Divorce Law</NavDropdown.Item> 
                        
                    </NavDropdown>
                  {/* </Nav.Link> */}
                <Nav.Link className='white' href='http://www.google.com'>About Us</Nav.Link>
                <Nav.Link className='white' href="#contact">Contact</Nav.Link>
                  
              </Nav>
            </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </Fragment>
)
}

export default NavbarSite