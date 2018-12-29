import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    const divStyle = {
      marginTop: '-76px'
    };
    return (
      <React.Fragment>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
          style={divStyle}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleControls"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleControls" data-slide-to="1" />
            <li data-target="#carouselExampleControls" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/landing/carousel/love_boat.jpg"
                alt="Love Boat"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/landing/carousel/tempura_udon.jpg"
                alt="Tempura Udon"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/landing/carousel/assorted_sashimi.jpg"
                alt="Assorted Sashimi"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
