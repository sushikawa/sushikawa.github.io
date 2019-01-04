import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
// import Slider from 'react-animated-slider/src/index';
// import 'react-animated-slider/build/horizontal.css';

import './ReactAnimatedSlider.css';
// import $ from 'jquery';

class ReactAnimatedSlider extends Component {
  render() {
    const content = [
      {
        title: 'Vernon Roll',
        description:
          'crab, prawn tempura, cucumber, chopped scallop on top with torched mozzarella, cheddar cheese and Teri & SP mayo sauce',
        button: 'Kawa Special Roll',
        linkTo: '/menu/kawa-special-roll/',
        image: '/images/landing/carousel/vernon_roll.jpg'
      },
      {
        title: 'Nigiri Sushi Combo',
        description:
          '1pc of each tuna, AT & wild salmon, ebi, hokkigai, tai, unagi, ika, tako, SP tuna nigiri',
        button: 'Sushi Combo',
        linkTo: '/menu/sushi-combo/',
        image: '/images/landing/carousel/nigiri_sushi_combo.jpg'
      },
      {
        title: 'Large Party Tray',
        description:
          'california, dynamite, crunchy house, crunchy california, SP tuna & alaska rolls, ebi nigiri(3pcs), tuna nigiri(3pcs), wild salmon nigiri(3pcs), AT salmon nigiri(3pcs), unagi nigiri(3pcs), chopped scallop(3pcs)',
        button: 'Party Tray',
        linkTo: '/menu/party-tray/',
        image: '/images/landing/carousel/large_tray.jpg'
      },
      {
        title: 'Ribs Combo',
        description: 'Korean-style marinated beef short ribs',
        button: 'BBQ Combo',
        linkTo: '/menu/bbq-combo/',
        image: '/images/landing/carousel/ribs_combo.jpg'
      },
      {
        title: 'Deluxe Tempura',
        description: '4pcs fish, 4pcs prawn & 8pcs veggie',
        button: 'Tempura',
        linkTo: '/menu/tempura/',
        image: '/images/landing/carousel/deluxe_tempura.jpg'
      }
      // {
      //   title: 'Chicken Katsu Udon',
      //   description: '',
      //   button: 'Udon',
      //   linkTo: '/menu/katsu-combo/',
      //   image: '/images/landing/carousel/chicken_katsu_udon.jpg'
      // }
    ];

    const mobileContent = [
      {
        title: 'Vernon Roll',
        description:
          'crab, prawn tempura, cucumber, chopped scallop on top with torched mozzarella, cheddar cheese and Teri & SP mayo sauce',
        button: 'Kawa Special Roll',
        linkTo: '/menu/kawa-special-roll/',
        image: '/images/landing/carousel/vernon_roll_mobile.jpg'
      },
      {
        title: 'Nigiri Sushi Combo',
        description:
          '1pc of each tuna, AT & wild salmon, ebi, hokkigai, tai, unagi, ika, tako, SP tuna nigiri',
        button: 'Sushi Combo',
        linkTo: '/menu/sushi-combo/',
        image: '/images/landing/carousel/nigiri_sushi_combo_mobile.jpg'
      },
      {
        title: 'Large Party Tray',
        description:
          'california, dynamite, crunchy house, crunchy california, SP tuna & alaska rolls, ebi nigiri(3pcs), tuna nigiri(3pcs), wild salmon nigiri(3pcs), AT salmon nigiri(3pcs), unagi nigiri(3pcs), chopped scallop(3pcs)',
        button: 'Party Tray',
        linkTo: '/menu/party-tray/',
        image: '/images/landing/carousel/large_tray_mobile.jpg'
      },
      {
        title: 'Ribs Combo',
        description: 'Korean-style marinated beef short ribs',
        button: 'BBQ Combo',
        linkTo: '/menu/bbq-combo/',
        image: '/images/landing/carousel/ribs_combo_mobile.jpg'
      },
      {
        title: 'Deluxe Tempura',
        description: '4pcs fish, 4pcs prawn & 8pcs veggie',
        button: 'Tempura',
        linkTo: '/menu/tempura/',
        image: '/images/landing/carousel/deluxe_tempura_mobile.jpg'
      }
      // {
      //   title: 'Chicken Katsu Udon',
      //   description: '',
      //   button: 'Udon',
      //   linkTo: '/menu/katsu-combo/',
      //   image: '/images/landing/carousel/chicken_katsu_udon_mobile.jpg'
      // }
    ];
    const isHeightHigher = window.innerHeight > window.innerWidth;
    return (
      <Slider className="slider-wrapper" autoplay={6000} touchDisabled={true}>
        {isHeightHigher
          ? this.renderContent(mobileContent)
          : this.renderContent(content)}
      </Slider>
    );
  }
  renderContent = content => {
    return content.map((item, index) => (
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
    ));
  };
  renderMobileContent = mobileContent => {
    return mobileContent.map((item, index) => (
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
    ));
  };
}

export default ReactAnimatedSlider;
