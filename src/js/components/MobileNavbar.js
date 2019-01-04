import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MobileNavbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      fixed: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.logoRef = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ fixed: nextProps.fixed });
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleLogoClick = () => {
    if (this.state.isOpen) this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    // console.log(this.props.height);
    return <React.Fragment>{this.renderData()}</React.Fragment>;
  }
  renderData = () => {
    const { isOpen, fixed } = this.state;
    const isPortrait = window.innerWidth < window.innerHeight;
    const isTouch = 'ontouchstart' in document.documentElement;
    const style = {
      // width: isTouch ? '100%' : this.props.navWidth
      width: isPortrait
        ? isTouch
          ? '100%'
          : this.props.navWidth
        : this.props.navWidth
    };
    // const logoLeft = this.logoRef;
    // console.log(logoLeft);
    return (
      <React.Fragment>
        <nav
          className={
            'main-nav ' +
            (fixed ? 'main-nav-fixed ' : '') +
            (isOpen ? 'dark-background' : '')
          }
          style={style}
        >
          {/* <button className="menu-button" onClick={this.handleClick}>
            {this.state.isOpen ? (
              <span className="close-button">X</span>
            ) : (
              <span className="burger-button">M</span>
              // <div className="burger-button">
              //   <span className="bar1" />
              //   <span className="bar2" />
              //   <span className="bar3" />
              // </div>
            )}
          </button> */}
          <div
            className={'menu-button ' + (isOpen ? 'change' : '')}
            onClick={this.handleClick}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <NavLink
            to="/"
            onClick={this.handleLogoClick}
            className="mobile-logo-link"
          >
            <img
              className="mobile-logo"
              src="/images/logo-white-130x44.png"
              alt="logo"
              ref={this.logoRef}
            />
          </NavLink>
        </nav>
        <div
          className={'popup-menu ' + (isOpen ? 'is-open' : '')}
          style={{
            top: this.props.height,
            height: window.innerHeight - this.props.height
          }}
        />
        <ul
          className={'popup-nav ' + (isOpen ? 'animate' : '')}
          style={{
            top: this.props.height,
            height: window.innerHeight - this.props.height
          }}
        >
          <li>
            <NavLink
              exact
              to="/"
              onClick={this.handleClick}
              activeClassName="active"
            >
              WELCOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/"
              onClick={this.handleClick}
              activeClassName="active"
            >
              MENU
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about"
              onClick={this.handleClick}
              activeClassName="active"
            >
              ABOUT
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/contact/"
              onClick={this.handleClick}
              activeClassName="active"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </React.Fragment>
    );
  };
}

export default MobileNavbar;
