import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../lh.png";
import x from "../../x.jpg";
import y from "../../green_spotify.png";
import Butterfly from "../../Butterfly.png";
import z from "../../Google-Photos-logo.png";
import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import { ImPhoneHangUp } from "react-icons/im";

class Navbarclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRhetoricModal: false,
    };
    this.handleShowRhetoricModal = this.handleShowRhetoricModal.bind(this);
    this.handleCloseRhetoricModal = this.handleCloseRhetoricModal.bind(this);
  }

  handleShowRhetoricModal() {
    this.setState({ showRhetoricModal: true });
  }

  handleCloseRhetoricModal() {
    this.setState({ showRhetoricModal: false });
  }

  render() {
    return (
      <>
        <Navbar fixed="top" bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <img
                width="90px"
                className="d-inline-block align-top"
                src={logo}
                alt="logo"
              />
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
SIGHTS                </Nav.Link>
              </Nav>

              <Nav className="navbarwords">
                <Nav.Link className="navbarwords" href="/profile">
                  <img width="47px" src={Butterfly} alt="Profile" />
                </Nav.Link>
              </Nav>
              <Nav className="navbarwords">
                <Nav.Link
                  className="navbarwords"
                  onClick={this.handleShowRhetoricModal}
                >
                  <ImPhoneHangUp
                    size={30}
                    className="rhetoric-icon"
                    style={{ cursor: "pointer" }}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal
          show={this.state.showRhetoricModal}
          onHide={this.handleCloseRhetoricModal}
          centered
          className="custom-modal"
        >
          <Modal.Header >
            <Modal.Title>Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Email:</strong> liam.hildreth@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> (289) 356-4949
            </p>
            <p>Port Hope, Ontario, Canada</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Navbarclass;