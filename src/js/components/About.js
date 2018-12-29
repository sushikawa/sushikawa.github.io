import React from 'react';
import OverflowScrolling from 'react-overflow-scrolling';

const About = () => {
  return (
    <React.Fragment>
      <header className="menu-header">
        <h1>ABOUT</h1>
      </header>
      <div className="container">
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
};

export default About;
