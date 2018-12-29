import React, { Component } from 'react';
import data from './data/menus';

class Beverage extends Component {
  constructor() {
    super();
    this.state = {
      data: data.beverage
    };
  }
  // componentDidMount() {
  //   if (this.props && this.props.data) this.setState({ data: this.props.data });
  // }
  render() {
    // const { data } = this.state;
    // console.log(data);
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
        <h1>Beverage</h1>

        <div className="menu-line-box">
          <img
            src="/images/menu/menu-line.png"
            alt="Menu Line"
            className="menu-line"
          />
        </div>

        <div className="data-container">
          <div className="without-url">
            {this.getDataWithoutUrl(data.white_wine)}
            {this.getDataWithoutUrl(data.red_wine)}
            {this.getDataWithoutUrl(data.sake)}
            {this.getDataWithoutUrl(data.beer)}
            {this.getDataWithoutUrl(data.japanese_beer)}
            {this.getDataWithoutUrl(data.soft_drinks)}
            {this.getDataWithoutUrl(data.juice)}
          </div>
          {/* <div className="with-url">{this.getDataWithUrl()}</div> */}
        </div>
      </div>
    );
  };

  getDataWithoutUrl = data => {
    // const withoutUrl = this.state.data.filter(item => item.url === '');

    if (data) {
      return (
        <React.Fragment>
          <h4 className="beverage-title">{data.name}</h4>
          {data.items.map((item, i) => (
            <div key={i} className="beverage-menu">
              <div className="first">
                <div className="name desc">{data.description}</div>
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
        </React.Fragment>
      );
    }
  };
}
export default Beverage;
