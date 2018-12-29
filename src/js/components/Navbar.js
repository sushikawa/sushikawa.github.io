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

  render() {
    // console.log('nav rendered');
    return <React.Fragment>{this.renderData()}</React.Fragment>;
  }
  renderData = () => {
    const { fixed } = this.state;
    // console.log(this.props.fixed);
    return (
      <nav className={'main-nav ' + (fixed ? 'main-nav-fixed' : '')}>
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
            <NavLink to="/menu" activeClassName="main-menu-active">
              MENU
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/about" activeClassName="main-menu-active">
              ABOUT
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/contact" activeClassName="main-menu-active">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
}

export default Navbar;
