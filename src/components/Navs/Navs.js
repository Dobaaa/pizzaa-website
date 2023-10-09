import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navs.css";
import logo from "./../../assets/logo.png";

function Navs() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title="logo" className="logo" />
          <h3>بينتولا</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link"> Explore Food </Nav.Link>
            <Nav.Link href="#link">Review </Nav.Link>
            <Nav.Link href="#link">Faq</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" id="LastNav">
              01211998934
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
