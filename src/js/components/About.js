import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
// import Pdf from 'react-pdf-js';
import OverflowScrolling from 'react-overflow-scrolling';
// import pdfFile from './pdf/sql.pdf';

class About extends Component {
  constructor() {
    super();
  }
  handleDownload = () => {
    window.open('/pdf/SushiKawaToGoMenu.pdf', '_blank');
  };

  render() {
    return (
      <React.Fragment>
        <header className="menu-header">
          <h1>ABOUT</h1>
        </header>
        <div className="kawa-container">
          <button onClick={this.handleDownload}>DOWNLOAD</button>

          <object
            style={{ marginTop: '2rem', height: '100vh' }}
            width="100%"
            // height="800"
            type="application/pdf"
            data="/pdf/SushiKawaToGoMenu.pdf?#zoom=100&scrollbar=0&toolbar=0&navpanes=0"
          >
            <p>
              Insert your error message here, if the PDF cannot be displayed.
            </p>
          </object>
          <OverflowScrolling className="overflow-scrolling">
            <ul>
              {Array.apply(null, Array(40)).map(function(item, i) {
                return <li key={i}>hello</li>;
              })}
            </ul>
          </OverflowScrolling>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
