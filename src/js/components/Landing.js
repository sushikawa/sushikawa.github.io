import React, { Component } from 'react';
// import Carousel from './landing/Carousel';
// import SlickSlider from './landing/SlickSlider';
import ReactAnimatedSlider from './landing/ReactAnimatedSlider';
// import CoverFlow from './landing/CoverFlow';

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <ReactAnimatedSlider />
        {/* <CoverFlow /> */}
      </React.Fragment>
    );
  }
}

export default Landing;
