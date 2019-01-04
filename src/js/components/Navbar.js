import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// import ContextTypes from '../ContextTypes';
import ContextTypes from '../ContextTypes';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      fixed: false,
      linkDisabled: true
    };
    this.routeChange = this.routeChange.bind(this);
  }
  static contextType = ContextTypes;

  componentWillReceiveProps(nextProps) {
    this.setState({ fixed: nextProps.fixed });
  }
  routeChange = e => {
    e.preventDefault();
    if (!this.context.menuLinkDisabled) {
      const path = '/menu/';
      this.props.history.push(path);
    }
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
              onClick={this.routeChange}
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

export default Object.assign(withRouter(Navbar), { contextType: undefined });
