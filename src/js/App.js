import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Landing from './components/Landing';
// import About from './components/About';
import Menu from './components/Menu';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import $ from 'jquery';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import axios from 'axios';

// import ReactAnimatedSlider from './components/landing/ReactAnimatedSlider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toTop: false,
      mainNavFixed: false,
      menuNavFixed: false,
      menuNavOffsetTop: 0,
      clientWidth: 0,
      cMenuNavOffsetTop: 0,
      navHeight: 0,
      messageSent: false,
      // menuLinkClicked: false,
      data: {}
    };

    this.masterRef = React.createRef();
    // this.menuRef = React.createRef();

    this.onScroll = this.onScroll.bind(this);
    this.handleMenuNavOffsetTop = this.handleMenuNavOffsetTop.bind(this);
    // this.handleMenuLinkClicked = this.handleMenuLinkClicked.bind(this);
  }

  componentDidMount() {
    const navHeight = document.getElementsByClassName('main-nav');

    this.setState({ navHeight: navHeight[0].clientHeight });

    window.addEventListener('resize', this.handleResize);
    const clientWidth = document.getElementsByClassName('master');
    // console.log('master component', clientWidth[0].clientWidth);
    this.setState({ clientWidth: clientWidth[0].clientWidth });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const clientWidth = document.getElementsByClassName('master');
    this.setState({ clientWidth: clientWidth[0].clientWidth });
    this.forceUpdate();
  };

  // for menu nav
  handleMenuNavOffsetTop = (menuNavOffsetTop, menuNavFixed) => {
    this.setState({ menuNavOffsetTop, menuNavFixed });
  };

  // for rerender master app when message is sent from contact page
  handleMessageSent = messageSent => {
    this.setState({ messageSent });
  };
  // async getPosts() {
  //   const res = await axios.get('/api/menu/menus');
  //   const data = await await res.data;

  //   this.setState({ data: await data });
  // }

  onScroll = () => {
    if (this.masterRef.current.scrollTop > 0) {
      this.setState({ mainNavFixed: true });
      // this.setState({cMenuNavOffsetTop: });
      if (this.masterRef.current.scrollTop > 400) {
        this.setState({ toTop: true });
      } else {
        this.setState({ toTop: false });
      }
    } else {
      this.setState({ mainNavFixed: false });
    }
    if (
      this.masterRef.current.scrollTop >=
      this.state.menuNavOffsetTop - this.state.navHeight
    ) {
      this.setState({ menuNavFixed: true });
    } else {
      this.setState({ menuNavFixed: false });
    }
  };

  // handleToTop = () => {
  //   window.scroll({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // };

  handleToTop = () => {
    $('.master').animate({ scrollTop: 0 }, 500);
    // const master = document.getElementsByClassName('.master');
    // master.scroll({ top: 0, behavior: 'smooth' });
    // this.masterRef.current.scroll({ top: 0, behavior: 'smooth' });
  };
  // handleMenuLinkClicked = () => {
  //   this.setState({ menuLInkClicked: true });
  // };

  render() {
    // console.log('master', this.state.menuNavFixed);
    // console.log(this.state.clientWidth);
    // console.log(
    //   navigator.maxTouchPoints || 'ontouchstart' in document.documentElement
    // );
    return <React.Fragment>{this.renderData()}</React.Fragment>;
  }

  renderData = () => {
    const { data, menuNavFixed, clientWidth } = this.state;
    return (
      <div className="master" ref={this.masterRef} onScroll={this.onScroll}>
        <React.Fragment>
          <Router onUpdate={() => console.log('updated')}>
            <React.Fragment>
              {this.renderNavbar()}

              <Switch>
                <Route exact path="/" render={() => <Landing />} />
                <Route
                  path="/menu/"
                  render={() => (
                    <Menu
                      // ref={this.menuRef}
                      fixed={menuNavFixed}
                      data={data}
                      onMenuTop={this.handleMenuNavOffsetTop}
                      mainNavHeight={this.state.navHeight}
                      menuWidth={clientWidth}
                    />
                  )}
                />
                {/* <Route exact path="/about" render={() => <About />} /> */}
                <Route
                  exact
                  path="/contact/"
                  render={() => (
                    <Contact renderMaster={this.handleMessageSent} />
                  )}
                />
                <Route render={() => <PageNotFound />} />
              </Switch>

              {this.renderToTop()}
              <Footer />
            </React.Fragment>
          </Router>
        </React.Fragment>
      </div>
    );
  };

  renderNavbar = () => {
    let isMobile = false;
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (w < h && w < 768) {
      isMobile = true;
    }
    return isMobile ? (
      <MobileNavbar
        fixed={this.state.mainNavFixed}
        height={this.state.navHeight}
        navWidth={this.state.clientWidth}
      />
    ) : (
      <Navbar
        fixed={this.state.mainNavFixed}
        height={this.state.navHeight}
        navWidth={this.state.clientWidth}
      />
    );
  };

  renderToTop = () => {
    return this.state.toTop ? (
      <button className="to-top" onClick={this.handleToTop.bind(this)}>
        <i className="fa fa-chevron-up" />
      </button>
    ) : (
      ''
    );
  };
}

export default App;
