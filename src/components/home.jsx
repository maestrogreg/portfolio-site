import React, { Component } from 'react'
import '../App.css';
export default class Homepage extends Component{
    render() {
      return (
        <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/greg1.jpg)', backgroundPosition: 'center'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Greg</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1-ix-z-A4rg0Rh5wuym5X9T13txYrqsBdRivICVjad8Y" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/greg2.jpg)', backgroundPosition: 'center'}}>
                <div className="overlay" />
                <div className="container-fluid" id="caption">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                        <h1>I love<br /> Technology</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/maestrogreg" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        </div>
      );
    }
};