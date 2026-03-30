import { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import power from "../../power.jpg";

class Profile extends Component {
  render() {
    return (
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-white py-5"
        style={{ 
          fontFamily: "'EB Garamond', serif"
        }}
      >
        {/* Text Section - now visible below navbar */}
        <div
          className="w-100 text-center mb-5"
          style={{ maxWidth: "800px", padding: "0 1rem" }}
        >
          <p className="fs-5" style={{ color: "black", margin: 0 }}>
            Warrior of righteousness.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-100" style={{ maxWidth: "1000px" }}>
          <img
            className="d-block w-100"
            src={power}
            alt="Power"
            style={{
              height: "600px",
              objectFit: "contain",
            }}
          />
        </div>
      </Container>
    );
  }
}

export default Profile;