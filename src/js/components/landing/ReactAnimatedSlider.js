import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
// import Slider from 'react-animated-slider/src/index';
// import 'react-animated-slider/build/horizontal.css';

import './ReactAnimatedSlider.css';
import $ from 'jquery';

class ReactAnimatedSlider extends Component {
  render() {
    const content = [
      {
        title: 'Sushi Boat',
        description: 'Japanese restaurant in Vernon',
        button: 'Appetizers',
        linkTo: '/menu/appetizer',
        image: '/images/landing/carousel/love_boat.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
      },
      {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
          'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Tempura udon',
        linkTo: '/menu/soupAndSalad/',
        image: '/images/landing/carousel/tempura_udon.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
      },
      {
        title: 'Phasellus volutpat metus',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Sashimi',
        linkTo: '/menu/appetizer',
        image: '/images/landing/carousel/assorted_sashimi.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
      }
    ];
    // console.log();
    $('.slider-wrapper .nextButton svg path').css({
      fill: 'currentcolor'
    });
    return (
      <Slider className="slider-wrapper" autoplay={6000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>

              <Link to={item.linkTo} style={{ outline: 'none' }}>
                <button className="slider-content-button">{item.button}</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default ReactAnimatedSlider;
