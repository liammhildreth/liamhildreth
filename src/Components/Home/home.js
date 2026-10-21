import React, { Component } from "react";
import Butterfly from "../../Butterfly.png";

class Home extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <a
          href="https://docs.google.com/document/d/1TFO8taWhxb5wYoz2SMWFsVfYPCBlASpwMWN9Eumy4O0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Butterfly}
            alt="Butterfly"
            style={{ width: "700px", maxWidth: "100%" }}
          />
        </a>
      </div>
    );
  }
}

export default Home;
