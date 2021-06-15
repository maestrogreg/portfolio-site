import React, { Component} from 'react';

export default class About extends Component{
    render(){
      return (
  
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p><strong>Hi I'm Gregory Izuka</strong>  a software developer from Nigeria, passionate about learning, and a lover of tecchnology. I have some years of experience programming using the JavaScript language, starting first from the Front-End using React and BootStrap and later proceeding to learn and work with the Back-End using NodeJS and ExpressJs.</p>
                      <p> I love software engineering because its a career field that gives room for imagination and creativity, there is no limit to what you can achieve in this field as long as you put your mind to it and stay positive.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  
                  <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                      <span className="icon2"><i className="icon-globe-outline" /></span>
                      <h3>Web Application</h3>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                      <span className="icon2"><i className="icon-data" /></span>
                      <h3>Database</h3>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                      <span className="icon2"><i className="icon-phone3" /></span>
                      <h3>Mobile Application</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="hire">
                      <h2>Glad to meet you<br />ready to work with you</h2>
                      <a href="#contact" className="btn-hire">Hire me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };