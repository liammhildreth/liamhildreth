import React, { Component } from "react";
import "./words.css";

class Words extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card h-100 border-white" style={{ minWidth: "300px" }}>
          <div className="card-body d-flex align-items-center justify-content-center">
            <h5 className="text-center mb-0">
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1TFO8taWhxb5wYoz2SMWFsVfYPCBlASpwMWN9Eumy4O0/edit?usp=sharing"
                style={{ textDecoration: "none" }}
              >
                The Holy Grail
              </a>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Words;