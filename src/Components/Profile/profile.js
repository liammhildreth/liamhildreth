import React, { Component } from "react";
import { Carousel, Container, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sex from '../../sex.jpg'
import caucasian from '../../caucasian.jpg'
import partner from '../../partner.jpg'
import liberty from '../../liberty.jpg'


class profile extends Component {
  state = {
    index: 0, // Controls carousel
  };

  handleSelect = (selectedIndex) => {
    this.setState({ index: selectedIndex });
  };


  render() {
    const { index } = this.state;

    const images = [
      partner, sex, caucasian, liberty
    ];

    const prevIcon = (
      <span
        style={{
          display: 'inline-block',
          width: '30px',
          height: '30px',
          textAlign: 'center',
          lineHeight: '30px',
          textDecoration: 'none',
          verticalAlign: 'middle',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          style={{ verticalAlign: 'middle' }}
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </span>
    );

    const nextIcon = (
      <span
        style={{
          display: 'inline-block',
          width: '30px',
          height: '30px',
          textAlign: 'center',
          lineHeight: '30px',
          textDecoration: 'none',
          verticalAlign: 'middle',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          style={{ verticalAlign: 'middle' }}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </span>
    );

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
            Master of rhetoric – warrior of righteousness.
          </p>
    
        </div>
        <div className="w-100" style={{ maxWidth: "1000px" }}>
          <Carousel
            activeIndex={index}
            onSelect={this.handleSelect}
            interval={null}
            prevIcon={prevIcon}
            nextIcon={nextIcon}
          >
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={image}
                  style={{ height: "600px", objectFit: "scale-down" }}
                />
            
              </Carousel.Item>
            ))}
          </Carousel>
        </div>


      </Container>
    );
  }
}

export default profile;