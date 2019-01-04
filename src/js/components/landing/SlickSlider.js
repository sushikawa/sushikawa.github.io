import React, { Component } from 'react';
import Slider from 'react-slick';

class SlickSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <Slider {...settings}>
          <div style={{ width: '100vw', height: '90vh', position: 'relative' }}>
            <img
              src="images/landing/carousel/love_boat.jpg"
              alt="Love Boat"
              style={{ width: '100%', height: '90vh' }}
            />
            <h1
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                color: '#fff'
              }}
            >
              Welcome
            </h1>
          </div>
          <div style={{ width: '100vw', height: '90vh', position: 'relative' }}>
            <img
              src="images/landing/carousel/tempura_udon.jpg"
              alt="Tempura Udon"
              style={{ width: '100vw', height: '90vh' }}
            />
            <h1
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                color: '#fff'
              }}
            >
              Welcome
            </h1>
          </div>
          <div style={{ width: '100vw', height: '90vh', position: 'relative' }}>
            <img
              src="images/landing/carousel/assorted_sashimi.jpg"
              alt="Assorted Sashimi"
              style={{ width: '100vw', height: '90vh' }}
            />
            <h1
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff'
              }}
            >
              Welcome
            </h1>
          </div>
        </Slider>
      </React.Fragment>
    );
  }
}

export default SlickSlider;
