import React, { Component } from "react";
import Butterfly from "../../Butterfly.png";

class Home extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <img
          src={Butterfly}
          alt="Butterfly"
          style={{ width: "700px", maxWidth: "100%" }}
        />
      </div>
    );
  }
}

export default Home;
