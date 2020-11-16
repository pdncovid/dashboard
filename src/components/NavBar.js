import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Button,Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';
import unilogo from './unilogo.jfif'
import {Link} from "react-router-dom"

const NavBar = props=>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <img src={unilogo} alt="unilogo" width="40" height="40" style={{marginLeft:20}}></img>
            <Navbar.Collapse id="basic-navbar-nav">
            
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/calendar" >Calendar</Nav.Link>
                <NavDropdown title="People" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Links" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Publications" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/research" >Research</Nav.Link>

                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/aboutUs" style={{marginLeft:700}}>About Us</Nav.Link>
                <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                </Nav>
                
                
            </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}

export default NavBar;