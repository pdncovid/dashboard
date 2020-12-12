import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/people">People</Nav.Link>
            <Nav.Link href="/links">Links</Nav.Link>
            <Nav.Link href="/publications">Publications</Nav.Link>
            <Nav.Link href="/research">Research</Nav.Link>
            <Nav.Link href="/joinUs">Join Us</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="//covid-0yl4080.slack.com">SLACK</Nav.Link>
            <Nav.Link href="//mendeley.com/sign/in">MENDELEY</Nav.Link>
            <Nav.Link href="//drive.google.com/drive/u/1/folders/0AAdNre7Cs_--Uk9PVA">DRIVE</Nav.Link>
            <Nav.Link href="//medium.com/pdncovid">MEDIUM</Nav.Link>
            
            <Nav.Link href="/aboutUs" style={{ marginLeft: 400 }}>
              About Us
            </Nav.Link>
            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
