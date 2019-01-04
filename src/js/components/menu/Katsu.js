import React, { Component } from 'react';
import $ from 'jquery';
import data from './data/menus';

class Katsu extends Component {
  constructor() {
    super();
    this.state = {
      data: data.katsu
    };
  }
  componentDidMount() {
    const menuHeader = document.getElementsByClassName('menu-header');
    const scrollTo = menuHeader[0].clientHeight - 40;
    const isTouch = 'ontouchstart' in document.documentElement;

    if (this.props.fixedMenu)
      $('.master').animate(
        { scrollTop: isTouch ? scrollTo - 60 : scrollTo - 50 },
        0
      );
  }
  render() {
    return (
      <React.Fragment>
        {this.state && this.state.data && this.renderData()}
      </React.Fragment>
    );
  }

  renderData = () => {
    return (
      <div className="menu-page container">
        <h1>Katsu Combo</h1>

        <div className="menu-line-box">
          <img
            src="/images/menu/menu-line.png"
            alt="Menu Line"
            className="menu-line"
          />
        </div>
        <h5>
          <em>Served with rice, miso soup & salad</em>
        </h5>
        <div className="data-container">
          <div className="without-url">{this.getDataWithoutUrl()}</div>
          <div className="with-url">{this.getDataWithUrl()}</div>
        </div>
      </div>
    );
  };

  getDataWithUrl = () => {
    const withUrl = this.state.data.filter(item => item.url !== '');

    return (
      <React.Fragment>
        {withUrl.map((item, i) => (
          <div key={i} className="item">
            <div
              className={'item-inner ' + ((i + 1) % 2 === 0 ? 'even' : 'odd')}
            >
              <div className="menu-img-box">
                <img src={item.url} alt={item.name} title={item.name} />
              </div>
              <div className="content-box">
                <div className="name">{item.name}</div>
                <div className="dot-box">
                  <div>{'.'.repeat(200)}</div>
                </div>
                <div className="price">${item.price}</div>
              </div>
              <div className="desc">{item.description}</div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  };

  getDataWithoutUrl = () => {
    const withoutUrl = this.state.data.filter(item => item.url === '');

    return (
      <React.Fragment>
        {withoutUrl.map((item, i) => (
          <div key={i} className="inner">
            <div className="content-box">
              <div className="name">{item.name}</div>
              <div className="dot-box">
                <div>{'.'.repeat(200)}</div>
              </div>
              <div className="price">${item.price}</div>
            </div>
            <div className="desc">{item.description}</div>
          </div>
        ))}
      </React.Fragment>
    );
  };
}
export default Katsu;
