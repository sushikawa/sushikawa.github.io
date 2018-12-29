import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Appetizer from './menu/Appetizer';
import SoupAndSalad from './menu/SoupAndSalad';
import Donburi from './menu/Donburi';
import BBQCombo from './menu/BBQCombo';
import Beverage from './menu/Beverage';
import Boat from './menu/Boat';
import Dessert from './menu/Dessert';
import DinnerBox from './menu/DinnerBox';
import Katsu from './menu/Katsu';
import KawaSpecialRoll from './menu/KawaSpecialRoll';
import LunchBox from './menu/LunchBox';
import Nigiri from './menu/Nigiri';
import Noodle from './menu/Noodle';
import PartyTray from './menu/PartyTray';
import RollCone from './menu/RollCone';
import SushiCombo from './menu/SushiCombo';
import Tempura from './menu/Tempura';
import Teriyaki from './menu/Teriyaki';
import Udon from './menu/Udon';
import Sashimi from './menu/Sashimi';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      fixedMenu: false,
      currentMenu: '',
      menuNavOffsetTop: 0
    };
    this.menuNavRef = React.createRef();
    this.scroller = React.createRef();
  }

  componentDidMount() {
    this.handleMenuNav();
  }
  componentWillUnmount() {
    this.handleMenuNav();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.fixed !== this.state.fixedMenu)
      this.setState({ fixedMenu: nextProps.fixed });
  }

  handleMenuNav = () => {
    // this.setState({ fixedMenu: false });
    const menuNavOffsetTop = this.menuNavRef.current.offsetTop;
    this.props.onMenuTop(menuNavOffsetTop);
  };

  change = string => {
    this.setState({ currentMenu: string });
  };

  handleLeftClick = () => {
    const scroller = this.scroller.current;

    this.sideScroll(
      scroller,
      'left',
      10,
      window.innerWidth > 767 ? 200 : 100,
      15
    );
  };

  handleRightClick = () => {
    const scroller = this.scroller.current;

    this.sideScroll(
      scroller,
      'right',
      10,
      window.innerWidth > 767 ? 200 : 100,
      15
    );
  };
  sideScroll = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    let slideTimer = setInterval(function() {
      if (direction === 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };
  render() {
    // console.log('menu rendered');
    const { fixedMenu } = this.state;

    return (
      <React.Fragment>{this.state && this.renderAll(fixedMenu)}</React.Fragment>
    );
  }
  renderAll = fixedMenu => {
    return (
      <React.Fragment>
        {this.renderHeader()}
        {this.renderNav(fixedMenu)}
        {this.renderContent(fixedMenu)}
      </React.Fragment>
    );
  };
  renderHeader = () => {
    return (
      <header className="menu-header">
        <div className="">
          <h1>MENU</h1>
          <p>Traditional Japanese techniques and recipes combined</p>
          <p>with the freshest ingredients</p>
        </div>
      </header>
    );
  };

  renderNav = fixedMenu => {
    return (
      <nav
        ref={this.menuNavRef}
        className={'menu-nav ' + (fixedMenu ? 'menu-nav-fixed' : '')}
        style={{ top: this.props.mainNavHeight }}
      >
        <div className="menu-nav-wrapper container">
          <button
            className="left-button button"
            onClick={this.handleLeftClick.bind(this)}
            ref={this.leftClick}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <div className="menu-nav-inner">
            <ul className="scroller" ref={this.scroller}>
              <li>
                <NavLink
                  to="/menu/sushi-rolls-cones"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Sushi Rolls & Cones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/appetizer"
                  className=""
                  activeClassName="menu-nav-active"
                  onClick={this.change.bind(this, 'appetizer')}
                >
                  Appetizer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/soup-and-salad"
                  className={'text-nowrap'}
                  activeClassName="menu-nav-active"
                  onClick={this.change.bind(this, 'soup')}
                >
                  Soup & Salad
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/donburi"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Donburi
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/bbq-combo"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  BBQ Combo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/beverage"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Beverage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/sushi-boat"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Sushi Boat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/dessert"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Dessert
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/dinner-box"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Dinner Box
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/katsu-combo"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Katsu Combo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/kawa-special-roll"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Kawa Special Roll
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/lunch-box"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Lunch Box
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/nigiri"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Nigiri
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/noodle"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Noodle
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/party-tray"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Party Tray
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/menu/sushi-combo"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Sushi Combo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/tempura"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Tempura
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/teriyaki"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Teriyaki
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/udon"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Udon
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu/sashimi"
                  className="text-nowrap"
                  activeClassName="menu-nav-active"
                >
                  Sashimi
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className="right-button button"
            onClick={this.handleRightClick.bind(this)}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </nav>
    );
  };

  renderContent = fixedMenu => {
    return (
      <div
        className={'menu-main-background ' + (fixedMenu ? 'addPaddingTop' : '')}
      >
        <div className="container menu-background rounded">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fadeMenu"
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/menu"
                      render={() => (
                        <PartyTray data={this.props.data.party_tray} />
                      )}
                    />
                    <Route
                      path="/menu/appetizer"
                      render={() => (
                        <Appetizer data={this.props.data.appetizer} />
                      )}
                    />
                    <Route
                      path="/menu/soup-and-salad"
                      render={() => (
                        <SoupAndSalad data={this.props.data.soupAndSalad} />
                      )}
                    />
                    <Route
                      path="/menu/donburi"
                      render={() => <Donburi data={this.props.data.donburi} />}
                    />
                    <Route
                      path="/menu/bbq-combo"
                      render={() => (
                        <BBQCombo data={this.props.data.bbq_combo} />
                      )}
                    />
                    <Route
                      path="/menu/beverage"
                      render={() => (
                        <Beverage data={this.props.data.beverage} />
                      )}
                    />
                    <Route
                      path="/menu/sushi-boat"
                      render={() => <Boat data={this.props.data.boat} />}
                    />
                    <Route
                      path="/menu/dessert"
                      render={() => <Dessert data={this.props.data.dessert} />}
                    />
                    <Route
                      path="/menu/dinner-box"
                      render={() => (
                        <DinnerBox data={this.props.data.dinner_box} />
                      )}
                    />
                    <Route
                      path="/menu/katsu-combo"
                      render={() => <Katsu data={this.props.data.katsu} />}
                    />
                    <Route
                      path="/menu/kawa-special-roll"
                      render={() => (
                        <KawaSpecialRoll
                          data={this.props.data.kawa_special_roll}
                        />
                      )}
                    />
                    <Route
                      path="/menu/lunch-box"
                      render={() => (
                        <LunchBox data={this.props.data.lunch_box} />
                      )}
                    />
                    <Route
                      path="/menu/nigiri"
                      render={() => <Nigiri data={this.props.data.nigiri} />}
                    />
                    <Route
                      path="/menu/noodle"
                      render={() => <Noodle data={this.props.data.noodle} />}
                    />
                    <Route
                      path="/menu/party-tray"
                      render={() => (
                        <PartyTray data={this.props.data.party_tray} />
                      )}
                    />
                    <Route
                      path="/menu/sushi-rolls-cones"
                      render={() => (
                        <RollCone data={this.props.data.roll_cone} />
                      )}
                    />
                    <Route
                      path="/menu/sushi-combo"
                      render={() => (
                        <SushiCombo data={this.props.data.sushi_combo} />
                      )}
                    />
                    <Route
                      path="/menu/tempura"
                      render={() => <Tempura data={this.props.data.tempura} />}
                    />
                    <Route
                      path="/menu/teriyaki"
                      render={() => (
                        <Teriyaki data={this.props.data.teriyaki} />
                      )}
                    />
                    <Route
                      path="/menu/udon"
                      render={() => <Udon data={this.props.data.udon} />}
                    />
                    <Route
                      path="/menu/sashimi"
                      render={() => <Sashimi data={this.props.data.sashimi} />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </div>
    );
  };
}

export default Menu;
