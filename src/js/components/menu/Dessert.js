import React, { Component } from 'react';
import $ from 'jquery';
import data from './data/menus';

class Dessert extends Component {
  constructor() {
    super();
    this.state = {
      data: data.dessert
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
    const { data } = this.state;

    return (
      <div className="menu-page container">
        <h1>Dessert</h1>

        <div className="menu-line-box">
          <img
            src="/images/menu/menu-line.png"
            alt="Menu Line"
            className="menu-line"
          />
        </div>

        <div className="data-container">
          <div className="without-url">
            {this.getDataWithoutUrl(data.icecream)}
            {this.getDataWithoutUrl(data.fruit_plate)}
          </div>
          {/* <div className="with-url">{this.getDataWithUrl()}</div> */}
        </div>
      </div>
    );
  };

  getDataWithoutUrl = data => {
    // const withoutUrl = this.state.data.filter(item => item.url === '');

    if (data) {
      // console.log(data.items instanceof Array, data);
      if (data.items && data.items instanceof Array) {
        return (
          <React.Fragment>
            {/* <div className="menu-wrapper"> */}
            <h4 className="beverage-title">{data.name}</h4>
            {data.items.map((item, i) => (
              <div key={i} className="beverage-menu">
                <div className="first">
                  <div className="name desc">
                    {data.description ? data.description : ''}
                  </div>
                  <div className="dot" />
                  <div className="price1 title">
                    {data.title1 ? data.title1 : ''}
                  </div>
                  <div className="price2 title">
                    {data.title2 ? data.title2 : ''}
                  </div>
                </div>
                <div className="second">
                  <div className="name second-name">{item.name}</div>
                  <div className="dot">
                    <div>{'.'.repeat(200)}</div>
                  </div>
                  <div className="price1">{item.price1 ? item.price1 : ''}</div>
                  <div className="price2">{item.price2 ? item.price2 : ''}</div>
                </div>
              </div>
            ))}
            {/* </div> */}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className="beverage-menu">
              <div className="first">
                <div className="name desc">
                  {data.description ? data.description : ''}
                </div>
                <div className="dot" />
                <div className="price1 title">
                  {data.title1 ? data.title1 : ''}
                </div>
                <div className="price2 title">
                  {data.title2 ? data.title2 : ''}
                </div>
              </div>
              <div className="second">
                <div className="beverage-title-name name">{data.name}</div>
                <div className="dot">
                  <div>{'.'.repeat(200)}</div>
                </div>
                <div className="price1">{data.price1 ? data.price1 : ''}</div>
                <div className="price2">{data.price2 ? data.price2 : ''}</div>
              </div>
            </div>
          </React.Fragment>
        );
      }
    }
  };
}
export default Dessert;
