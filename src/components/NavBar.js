import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom"
import unilogo from "./unilogo.jfif";

const NavBar = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <img
          src={unilogo}
          alt="unilogo"
          width="40"
          height="40"
          style={{ marginLeft: 20 }}
        ></img>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to = "/calendar">Calendar</Link></Nav.Link>
            <Nav.Link><Link to = "/people">People</Link></Nav.Link>
            <Nav.Link><Link to = "/links">Links</Link></Nav.Link>
            <Nav.Link><Link to = "/publications">Publications</Link></Nav.Link>
            <Nav.Link><Link to = "/research">Research</Link></Nav.Link>
            <Nav.Link><Link to = "/joinus">Join Us</Link></Nav.Link>
            <Nav.Link><Link to = "/news">News</Link></Nav.Link>
            <Nav.Link href="//covid-0yl4080.slack.com">SLACK</Nav.Link>
            <Nav.Link href="//mendeley.com/sign/in">MENDELEY</Nav.Link>
            <Nav.Link href="//drive.google.com/drive/u/1/folders/0AAdNre7Cs_--Uk9PVA">DRIVE</Nav.Link>
            <Nav.Link href="//medium.com/pdncovid">MEDIUM</Nav.Link>
            
            <Nav.Link style={{ marginLeft: 400 }}>
              <Link to = "/aboutus">About Us</Link>
              
            </Nav.Link>
            <Nav.Link><Link to = "/contactus">Contact Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
