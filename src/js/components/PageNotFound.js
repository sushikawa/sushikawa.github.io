import React, { Component } from 'react';
// import Navbar from './Navbar';

class PageNotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="menu-header">
          <div className="container pageNotFound">
            <h1>404</h1>
            <h3>Oops, Page Not Found!</h3>
          </div>
        </header>
        {/* <div className="container">
          <button>asdf</button>
        </div> */}
      </React.Fragment>
    );
  }
}

export default PageNotFound;
