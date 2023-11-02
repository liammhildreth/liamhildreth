/*import React, { Component } from "react";

import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const images = require.context("../../images", true);
const imageList = images.keys().map((image) => images(image));

class Photos extends Component {

    render() {

    return (
        <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
      <SlideshowLightbox className="container mx-auto px-3">
        {imageList.map((image, index) => (
          <img width={50} height={50}key={index} src={image.default} alt={`image-${index}`} />
        ))}
      </SlideshowLightbox>
      </div>
    );
  }
}
export default Photos;*/
