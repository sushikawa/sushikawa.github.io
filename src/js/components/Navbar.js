import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      fixed: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ fixed: nextProps.fixed });
  }
  handleMenuLinkClicked = () => {
    this.props.handleMenuLinkClicked(true);
  };
  render() {
    // console.log('nav rendered');
    return <React.Fragment>{this.renderData()}</React.Fragment>;
  }
  renderData = () => {
    const { fixed } = this.state;
    // const isTouch =
    //   navigator.maxTouchPoints || 'ontouchstart' in document.documentElement;
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

    // console.log(this.props.fixed);
    return (
      <nav
        className={'main-nav ' + (fixed ? 'main-nav-fixed' : '')}
        style={style}
      >
        {/* <nav className="main-nav"> */}
        <ul className="container">
          <li>
            <NavLink to="/">
              {/* <img src="/images/logo-123x44.png" alt="logo" className="" /> */}
              <img src="/images/logo-white-130x44.png" alt="logo" />
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="main-menu-active">
              WELCOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu/"
              activeClassName="main-menu-active"
              onClick={this.handleMenuLinkClicked.bind(this)}
            >
              MENU
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/about" activeClassName="main-menu-active">
              ABOUT
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/contact/" activeClassName="main-menu-active">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
}

export default Navbar;
