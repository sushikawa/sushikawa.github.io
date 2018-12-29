import React, { Component } from 'react';
import data from './data/menus';

class RollCone extends Component {
  constructor() {
    super();
    this.state = {
      data: data.roll_cone
    };
  }
  // componentDidMount() {
  //   if (this.props && this.props.data)
  //     this.setState({ data: this.props.data });
  // }
  render() {
    return (
      <React.Fragment>
        {this.state && this.state.data && this.renderData()}
      </React.Fragment>
    );
  }

  renderData = () => {
    const small = this.state.data.small;
    const medium = this.state.data.medium;
    const large = this.state.data.large;
    return (
      <div className="menu-page container">
        <h1>Sushi Rolls & Cones</h1>

        <div className="menu-line-box">
          <img
            src="/images/menu/menu-line.png"
            alt="Menu Line"
            className="menu-line"
          />
        </div>
        <h5>
          <em>*We can deep fry any roll for extra $2.00</em>
        </h5>
        <h5>
          <em>*on top masago for extra $2.00</em>
        </h5>
        <div className="data-container">
          <div className="without-url">
            {this.getDataWithoutUrl(small, 'Small (6pcs)')}
          </div>
          <div className="without-url">
            {this.getDataWithoutUrl(medium, 'Medium (8pcs)')}
          </div>
          <div className="without-url">
            {this.getDataWithoutUrl(large, 'Large (6pcs)')}
          </div>
          <div className="with-url">{this.getDataWithUrl()}</div>
        </div>
      </div>
    );
  };

  getDataWithUrl = () => {
    // const withUrl = this.state.data.filter(item => item.url !== '');

    // console.log();
    if (this.state.data.withUrl) {
      const withUrl = this.state.data.withUrl;
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
    }
  };

  getDataWithoutUrl = (withoutUrl, title) => {
    // const withoutUrl = this.state.data.filter(item => item.url === '');
    // const withoutUrl = this.state.data.filter(item => item[0]);
    if (withoutUrl) {
      return (
        <React.Fragment>
          <h4 className="title">{title}</h4>
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
    }
  };
}
export default RollCone;
