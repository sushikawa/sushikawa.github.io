import React, { Component } from 'react';
import ContextTypes from '../../ContextTypes';

class MenuNotFound extends Component {
  static contextType = ContextTypes;
  componentDidMount() {
    this.context.menuLinkDisabled = false;
  }
  render() {
    return (
      <React.Fragment>
        {/* <header className="menu-header"> */}
        <div className="container menuNotFound">
          <h3>The menu is not found!</h3>
        </div>
        {/* </header> */}
        {/* <div className="container">
          <button>asdf</button>
        </div> */}
      </React.Fragment>
    );
  }
}

export default MenuNotFound;
