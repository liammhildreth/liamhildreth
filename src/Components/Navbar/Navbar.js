import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../lh.png";
import x from "../../x.avif";
import y from "../../green_spotify.png";
import { Navbar, Nav, Container } from "react-bootstrap";

class Navbarclass extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img
              width="90px"
              className="d-inline-block align-top"
              src={logo}
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navbarwords">
              <Nav.Link className="navbarwords" href="/words">
                WORDS
              </Nav.Link>
            </Nav>
            <Nav className="navbarwords">
              <Nav.Link
                className="navbarwords"
                target="_blank"
                href="https://photos.app.goo.gl/TNdtNdqFCtQJDcJ49"
              >
                SIGHTS
              </Nav.Link>
            </Nav>
            <Nav className="navbarwords">
              <Nav.Link
                className="navbarwords"
                target="_blank"
                href="http://x.com/liamhildreth"
              >
                <img width="30px" src={x} alt="logo"></img>
              </Nav.Link>
            </Nav>
            <Nav className="navbarwords">
              <Nav.Link
                className="navbarwords"
                target="_blank"
                href="https://open.spotify.com/user/22dz6usw3ktrhb4vbwarikfky?si=3511ba5bdacd441c"
              >
                <img width="25px" src={y} alt="logo"></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navbarclass;