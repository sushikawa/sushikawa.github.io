import React from 'react';

export default () => {
  return (
    <footer className="master-footer">
      <div className="footer-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 item">
              {/* <img src="/images/logo-white-130x44.png" alt="logo" />
              &nbsp;&nbsp;Japanese Restaurant */}
              <div>
                <div className="footer-about">
                  <span>About</span>
                  <span className="img">
                    <img src="/images/logo-white-130x44.png" alt="logo" />
                  </span>
                </div>
                <p className="text-center">
                  What separates Sushi Kawa from the rest of the sushi herd, is
                  the love and care that went into the food and setup of the
                  location. Only the best chefs were hired and trained by the
                  owner, and the food speaks for itself. Come on over to our
                  location and taste for yourself the fresh, refreshing
                  assortment of Japanese food.
                </p>
              </div>
            </div>
            <div className="col-md-4 item info">
              <div>
                <h3>Business Hours:</h3>
                <hr />
                <p>Monday : 11:30 am - 8:00 pm</p>
                <p>Tuesday : CLOSED</p>
                <p>Wednesday : 11:30 am - 8:00 pm</p>
                <p>Thursday : 11:30 am - 8:00 pm</p>
                <p>Friday : 11:30 am - 8:00 pm</p>
                <p>Saturday : 11:30 am - 8:00 pm</p>
                <p>Sunday : 12:00 pm - 7:30 pm</p>
                <hr />
              </div>
            </div>
            <div className="col-md-4 item info">
              <div>
                <h3>Info:</h3>
                <p>
                  <i className="fas fa-map-marked-alt" />
                  3107 32 St, Vernon, BC V1T-5M6
                </p>
                <p>
                  <i className="fas fa-phone" />
                  (250) 260-3558
                </p>
                <p>
                  <i className="fas fa-envelope-open" />
                  info@sushikawa.ca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()} Sushi Kawa. All rights
        reserved.
      </div>
    </footer>
  );
};
