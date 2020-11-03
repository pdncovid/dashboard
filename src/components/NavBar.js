import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Button,Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap';

const NavBar = props=>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <img src="/dependencies/pics/uniogo.jfif" width="30" height="30" alt=""></img>
            <Navbar.Collapse id="basic-navbar-nav">
            
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Calendar</Nav.Link>
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
                <NavDropdown title="Research" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#home">News</Nav.Link>
                <Nav.Link href="#home">About Us</Nav.Link>
                <Nav.Link href="#home">Contact Us</Nav.Link>
                </Nav>
                
                
            </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}

export default NavBar;