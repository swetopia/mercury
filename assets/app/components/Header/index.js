import React, { Component } from "react";
import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Project from "../Project";
const Header = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Sweet IT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="#pricing">Participent</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
