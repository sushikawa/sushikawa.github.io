import React, { Component } from 'react';
import $ from 'jquery';

import ContextTypes from '../ContextTypes';

// import Carousel from './landing/Carousel';
// import SlickSlider from './landing/SlickSlider';
import ReactAnimatedSlider from './landing/ReactAnimatedSlider';
// import CoverFlow from './landing/CoverFlow';

class Landing extends Component {
  static contextType = ContextTypes;
  componentDidMount() {
    $('.master').animate({ scrollTop: 0 }, 0);
    this.context.menuLinkDisabled = false;
  }
  render() {
    return (
      <React.Fragment>
        <div className="landing-page">
          <ReactAnimatedSlider />
        </div>
        {/* <CoverFlow /> */}
      </React.Fragment>
    );
  }
}

export default Landing;
