import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import $ from 'jquery';

import MenuNotFound from './menu/MenuNotFound';
import ContextTypes from '../ContextTypes';

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
// import PageNotFound from './PageNotFound';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      fixedMenu: false,
      menuNavOffsetTop: 0
    };
    this.menuNavRef = React.createRef();
    this.scroller = React.createRef();
    this.handleMenuNav = this.handleMenuNav.bind(this);
    this.change = this.change.bind(this);
  }
  static contextType = ContextTypes;

  componentDidMount() {
    // this.setState({ fixedMenu: false });
    this.context.menuLinkDisabled = true;
    this.handleMenuNav();
    window.addEventListener('resize', this.handleResize);
    $('.master').animate({ scrollTop: 0 }, 0);
    if (window.location.pathname === '/menu/' && $('.scroller')) {
      this.scrollLeft($('.scroller').find('.first-active')[0].offsetLeft);
    }
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   this.handleMenuNav();
  //   return true;
  // }
  componentWillUnmount() {
    // this.handleMenuNav();
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    // this.setState({ fixedMenu: false });

    const menuNavOffsetTop = this.menuNavRef.current.offsetTop;

    this.props.onMenuTop(menuNavOffsetTop);
    this.forceUpdate();
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.fixed !== this.state.fixedMenu)
      this.setState({ fixedMenu: nextProps.fixed });
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.fixed !== prevState.fixedMenu)
  //     return { fixedMenu: nextProps.fixed };
  //   else {
  //     return null;
  //   }
  // }

  handleMenuNav = () => {
    this.setState({ fixedMenu: false });

    const menuNavOffsetTop = this.menuNavRef.current.offsetTop;
    this.props.onMenuTop(menuNavOffsetTop);

    if (
      window.location.pathname === '/menu/' ||
      window.location.pathname === '/menu'
    ) {
      $(".scroller > li > a[href*='/kawa-special-roll/']").addClass(
        'first-active'
      );
    }
    if (
      this.menuNavRef &&
      (window.location.pathname !== '/menu/' ||
        window.location.pathname !== '/menu') &&
      $('.scroller').find('.menu-nav-active')[0]
    )
      this.scrollLeft($('.scroller').find('.menu-nav-active')[0].offsetLeft);
  };

  change = string => {
    let firstActiveLink = $(".scroller > li > a[href*='/kawa-special-roll/']");
    if (firstActiveLink.hasClass('first-active'))
      firstActiveLink.removeClass('first-active');
  };

  handleLeftClick = () => {
    $('.scroller-x')
      .stop()
      .animate({ scrollLeft: '-=' + (window.innerWidth > 767 ? 300 : 200) });
  };
  handleRightClick = () => {
    $('.scroller-x')
      .stop()
      .animate({ scrollLeft: '+=' + (window.innerWidth > 767 ? 300 : 200) });
  };
  scrollLeft = offset => {
    $('.scroller-x').animate({ scrollLeft: '+=' + offset }, 500);
  };
  // sideScroll = (element, direction, speed, distance, step) => {
  //   let scrollAmount = 0;
  //   let slideTimer = setInterval(function() {
  //     if (direction === 'left') {
  //       element.scrollLeft -= step;
  //     } else {
  //       element.scrollLeft += step;
  //     }
  //     scrollAmount += step;
  //     if (scrollAmount >= distance) {
  //       window.clearInterval(slideTimer);
  //     }
  //   }, speed);
  // };
  render() {
    const { fixedMenu } = this.state;

    return (
      <React.Fragment>{this.state && this.renderAll(fixedMenu)}</React.Fragment>
    );
  }
  renderAll = fixedMenu => {
    return (
      <React.Fragment>
        {this.renderHeader(fixedMenu)}
        {this.renderContent(fixedMenu)}
      </React.Fragment>
    );
  };
  renderHeader = fixedMenu => {
    return (
      <header className={'menu-header '}>
        <div className="">
          <p>
            Nothing but the freshest ingredients fused with authentic
            traditional japanese cooking style
          </p>
        </div>
        {this.renderNav(fixedMenu)}
      </header>
    );
  };

  renderNav = fixedMenu => {
    // console.log('menu nav', this.props.menuWidth);
    // const isTouch =
    //   navigator.maxTouchPoints || 'ontouchstart' in document.documentElement;
    const isPortrait = window.innerWidth < window.innerHeight;
    const isTouch = 'ontouchstart' in document.documentElement;
    const style = {
      // top: this.props.mainNavHeight,
      width: isTouch ? '100%' : this.props.menuWidth
    };
    const fixedStyle = {
      top: this.props.mainNavHeight,
      // width: isTouch ? '100%' : this.props.menuWidth
      width: isPortrait
        ? isTouch
          ? '100%'
          : this.props.menuWidth
        : this.props.menuWidth
      // position: isTouch ? 'sticky' : 'fixed'
    };

    return (
      <nav
        ref={this.menuNavRef}
        className={'menu-nav ' + (fixedMenu ? 'menu-nav-fixed' : '')}
        style={fixedMenu ? fixedStyle : style}
      >
        <div className="menu-nav-wrapper">
          <button
            className="left-button button"
            onClick={this.handleLeftClick.bind(this)}
            ref={this.leftClick}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <div className="menu-nav-inner">
            <div className="scroller-x">
              <ul className="scroller" ref={this.scroller}>
                <li>
                  <NavLink
                    to="/menu/appetizer/"
                    className=""
                    activeClassName="menu-nav-active"
                    // onClick={this.change.bind(this, 'appetizer')}
                    onClick={this.change}
                  >
                    Appetizer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/bbq-combo/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    BBQ Combo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/beverage/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Beverage
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/sushi-boat/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Boat(Sushi)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/dessert/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Dessert
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/dinner-box/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Dinner Box
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/donburi/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Donburi
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/katsu-combo/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Katsu Combo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/kawa-special-roll/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                  >
                    Kawa Special Roll
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/lunch-box/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Lunch Box
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/nigiri/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Nigiri(Sushi)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/noodle/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Noodle
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/party-tray/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Party Tray
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/sushi-rolls-cones/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Sushi Rolls & Cones
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/soup-and-salad/"
                    className={'text-nowrap'}
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Soup & Salad
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/menu/sushi-combo/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Sushi Combo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/tempura/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Tempura
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/teriyaki/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Teriyaki
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/udon/"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Udon
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu/sashimi"
                    className="text-nowrap"
                    activeClassName="menu-nav-active"
                    onClick={this.change}
                  >
                    Sashimi
                  </NavLink>
                </li>
              </ul>
            </div>
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
      <div className={'menu-main-background '}>
        <div className="container menu-background">
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
                      path="/menu/"
                      render={() => (
                        <KawaSpecialRoll
                          data={this.props.data.kawa_special_roll}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/appetizer/"
                      render={() => (
                        <Appetizer
                          data={this.props.data.appetizer}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/soup-and-salad/"
                      render={() => (
                        <SoupAndSalad
                          data={this.props.data.soupAndSalad}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/donburi/"
                      render={() => (
                        <Donburi
                          data={this.props.data.donburi}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/bbq-combo/"
                      render={() => (
                        <BBQCombo
                          data={this.props.data.bbq_combo}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/beverage/"
                      render={() => (
                        <Beverage
                          data={this.props.data.beverage}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/sushi-boat/"
                      render={() => (
                        <Boat
                          data={this.props.data.boat}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/dessert/"
                      render={() => (
                        <Dessert
                          data={this.props.data.dessert}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/dinner-box/"
                      render={() => (
                        <DinnerBox
                          data={this.props.data.dinner_box}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/katsu-combo/"
                      render={() => (
                        <Katsu
                          data={this.props.data.katsu}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/kawa-special-roll"
                      render={() => (
                        <KawaSpecialRoll
                          data={this.props.data.kawa_special_roll}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/lunch-box/"
                      render={() => (
                        <LunchBox
                          data={this.props.data.lunch_box}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/nigiri/"
                      render={() => (
                        <Nigiri
                          data={this.props.data.nigiri}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/noodle/"
                      render={() => (
                        <Noodle
                          data={this.props.data.noodle}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/party-tray/"
                      render={() => (
                        <PartyTray
                          data={this.props.data.party_tray}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/sushi-rolls-cones/"
                      render={() => (
                        <RollCone
                          data={this.props.data.roll_cone}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/sushi-combo/"
                      render={() => (
                        <SushiCombo
                          data={this.props.data.sushi_combo}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/tempura/"
                      render={() => (
                        <Tempura
                          data={this.props.data.tempura}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/teriyaki/"
                      render={() => (
                        <Teriyaki
                          data={this.props.data.teriyaki}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/udon/"
                      render={() => (
                        <Udon
                          data={this.props.data.udon}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/menu/sashimi/"
                      render={() => (
                        <Sashimi
                          data={this.props.data.sashimi}
                          fixedMenu={fixedMenu}
                        />
                      )}
                    />
                    <Route component={MenuNotFound} />
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
