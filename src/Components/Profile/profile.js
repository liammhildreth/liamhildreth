import React, { Component } from "react";
import { Carousel, Container, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sex from "../../sex.jpg";
import caucasian from "../../caucasian.jpg";
import partner from "../../partner.jpg";
import liberty from "../../liberty.jpg";
import power from "../../power.jpg";

class profile extends Component {


  render() {

    return (
      <Container
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-white"
        style={{ fontFamily: "'EB Garamond', serif" }}
      >
        <div
          className="w-100"
          style={{ maxWidth: "800px", marginBottom: "2rem", padding: "0 1rem" }}
        >
          <p className="text-center fs-5" style={{ color: "black" }}>
            <br />
            <br />
            <br />
            Warrior of righteousness.
          </p>
        </div>
        <div className="w-100" style={{ maxWidth: "1000px" }}>
          <img
            className="d-block w-100"
            src={power}
            style={{ height: "600px", objectFit: "scale-down" }}
          />
        </div>
      </Container>
    );
  }
}

export default profile;
