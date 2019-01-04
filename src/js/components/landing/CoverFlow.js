import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

class CoverFlow extends Component {
  render() {
    return (
      <React.Fragment>
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              '@media (max-width: 900px)': {
                width: '600px',
                height: '300px'
              },
              '@media (min-width: 900px)': {
                width: '960px',
                height: '600px'
              }
            }}
          >
            <img
              src="/images/landing/carousel/love_boat.jpg"
              alt="Love Boat"
              data-action="/menu/appetizer"
            />
            <img
              src="/images/landing/carousel/tempura_udon.jpg"
              alt="Tempura Udon"
              data-action="http://passer.cc"
            />
            <img
              src="/images/landing/carousel/assorted_sashimi.jpg"
              alt="Assorted Sashimi"
              data-action="https://doce.cc/"
            />
          </Coverflow>
        </StyleRoot>
      </React.Fragment>
    );
  }
}

export default CoverFlow;
