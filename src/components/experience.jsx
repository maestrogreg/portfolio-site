import React, { Component } from 'react';

export default class Experience extends Component{
    render() {
      return (
  
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Full Stack Developer at Seamfix</a> <span>2021 - Present</span></h2>
                        <p>Part of a team that built and maintain a platform that enables organisations to safely manage their devices and ensure they are used for the specific purpose.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Full Stack Developer at Decagon</a> <span>2021</span></h2>
                        <p>Built projects making use of the agile methodologies, applying Test-Driven-Development and continuous integration/continuous deployment. Exposed to various technologies such as; Express.js, React.js, MongoDB, Postgress, GraphQL, NodeJS, TypeScript and Docker. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Front End Developer at WAI LEX SERV</a>
                          <span>2020-2021</span></h2>
                        <p>Designed and developed web applications using front-end technologies such as React and Bootstrap.</p>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };