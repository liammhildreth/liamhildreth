import React, { Component } from "react";
import { Carousel, Container, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImPhoneHangUp } from "react-icons/im";

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
      {
        src: "https://media.discordapp.net/attachments/795390547124289569/1385191888801370183/AP1GczPyr54GfbdAtAyjHp9Rbqywp0k-mz_YEUUi9DgPZao7yDgdMeqRMbSC9EUA3VxG6Yji4cAm0oL7vDPOWnPGg-9PO16OqrIHufGak771QoargZO5nhRH4vtkNpe0n6fsO6UYLXWAFMvgkY1PLbUEZg6bw627-h836-s-no-gm.png?ex=68552bf9&is=6853da79&hm=4144d0c91369a6dbca3db411da904a7c591d58dbbb6a20f626d63901e6bd0a11&=&format=webp&quality=lossless",
      },
      {
        src: "https://media.discordapp.net/attachments/795390547124289569/1385166496891670681/sex.jpg?ex=68551454&is=6853c2d4&hm=e9cc05e5b59e69fc532d0b299742bc7497a3eb15aa5bafe36b37021aa63b57d9&=&format=webp",
      },
      {
        src: "https://media.discordapp.net/attachments/795390547124289569/1176927695653830726/Photo_on_2015-08-20_at_12.07_AM.jpg?ex=6854e894&is=68539714&hm=507912877b8b7a917350242bdfcd7bd3e27ad0cfd8e1f29d51e2ab284d13991f&=&format=webp",
      },
      {
        src: "https://media.discordapp.net/attachments/795390547124289569/1385192013892419584/AP1GczNho5r4T4ntkWy0WWOamIauZurcb0B9ZIwM_-K0gB2ZWQaKSsuwRWBY15SxbrgrtMwnTo46T2RnMp5pvC27NYALMqL0ZXkTBr_Uw7R6gMD5XCSm1OWyJORVk_VcHmBuKLcfVuP6Pxo5kZvzaXW08II4w516-h917-s-no-gm.png?ex=68552c17&is=6853da97&hm=c3f82b94546b9dc49664d71a5a02d05b18d25eb5c867ca5a59ef0128365b46bb&=&format=webp&quality=lossless&width=475&height=844",
      },
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
                  src={image.src}
                  style={{ height: "600px", objectFit: "scale-down" }}
                />
                <Carousel.Caption>
                  <h3>{image.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>


      </Container>
    );
  }
}

export default profile;