import React, { Component } from 'react';

export class Storeinfo extends Component {
  handleLocationClick = () => {
    window.open(
      'https://www.google.com/maps/place/3107+32+St,+Vernon,+BC+V1T+5M6/@50.2648035,-119.2757326,17z/data=!3m1!4b1!4m5!3m4!1s0x537dd8c28e2978b5:0x872804e01a1b0f2b!8m2!3d50.2648001!4d-119.2735439',
      '_blank'
    );
  };
  handlePhoneClick = () => {
    window.location.href = 'tel:2502603558';
  };
  handleEmailClick = () => {
    window.location.href = 'mailto:info@sushikawa.ca';
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="logo">
            <img src="/images/logo-400x162.png" alt="logo" />
          </div>
          <h2>Information:</h2>
          <hr style={{ width: '50%' }} />
          <div className="address store-info-box">
            <div className="icon">
              <h1>
                <button onClick={this.handleLocationClick}>
                  <i className="fas fa-map-marked-alt" />
                </button>
              </h1>
            </div>
            <div className="info">
              <div className="info-inner">
                <h3>ADDRESS</h3>
                <p>
                  3107 32 St, Vernon, B.C.
                  <br />
                  V1T-5M6
                </p>
              </div>
            </div>
          </div>

          <div className="phone store-info-box">
            <div className="icon">
              <h1>
                <button onClick={this.handlePhoneClick}>
                  <i className="fas fa-phone" />
                </button>
              </h1>
            </div>
            <div className="info">
              <div className="info-inner">
                <h3>PHONE</h3>
                <p>(250) 260-3558</p>
              </div>
            </div>
          </div>
          <div className="email store-info-box">
            <div className="icon">
              <h1>
                <button onClick={this.handleEmailClick}>
                  <i className="fas fa-envelope-open" />
                </button>
              </h1>
            </div>
            <div className="info">
              <div className="info-inner">
                <h3>E-MAIL</h3>
                <p>info@sushikawa.ca</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Storeinfo;
