import React, { Component } from 'react';

export default class imageCounters extends Component{
    render() {
      return (
  
        <div id="colorlib-counter" className="colorlib-counters" style={{backgroundImage: 'url(images/xcover_bg_1.jpg.pagespeed.ic.Hi1LCNHI9b.jpg)'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="colorlib-narrow-content">
            <div className="row">
            </div>
            <div className="row">
              <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from={0} data-to={40} data-speed={5000} data-refresh-interval={50} />
                <span className="colorlib-counter-label">work hours per week</span>
              </div>
              <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from={0} data-to={23} data-speed={5000} data-refresh-interval={50} />
                <span className="colorlib-counter-label">Projects</span>
              </div>
              <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from={0} data-to={2} data-speed={5000} data-refresh-interval={50} />
                <span className="colorlib-counter-label">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
};