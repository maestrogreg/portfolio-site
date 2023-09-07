import React, { Component, useState } from 'react';
import emailjs,{ init } from 'emailjs-com';

const Contact = ()=>{
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [subject, setSubject] = useState("");
     const [message, setMessage] = useState("");
    async function submitForm(){
        const templateParams = {
            from_name: name ,
            to_name: "gregizuka@gmail.com",
            email: email,
            subject: subject,
            message: message
    };
        init("user_gMLajNgvwBID0un9HTpi5");
        emailjs.send("service_v5blbax","template_8qo2ofm", templateParams)
      .then((data)=>{
          alert('form submitted');
      })
      .catch((err)=>{
          // alert('form not submitted');
          console.log(err)
      })
    }
      return (
  
        <section className="colorlib-contact" data-section="contact" id="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Get in Touch</span>
                <h2 className="colorlib-heading">Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-globe-outline" />
                  </div>
                  <div className="colorlib-text">
                    <p><a href="#"><span className="__cf_email__" data-cfemail="81e8efe7eec1e5eeece0e8efafe2eeec">[email&nbsp;protected]</span></a>
                    </p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-map" />
                  </div>
                  <div className="colorlib-text">
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-phone" />
                  </div>
                  <div className="colorlib-text">
                    <p><a href="tel://">+234 809 5534 852</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-md-push-1">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                    <form action="" onSubmit={(event)=> {event.preventDefault(); submitForm()}} >
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} required/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" value={subject} onChange={(event) => setSubject(event.target.value)} required/>
                      </div>
                      <div className="form-group">
                        <textarea  id="message" cols={30} rows={7} className="form-control" placeholder="Message" value={message} onChange={(event) => setMessage(event.target.value)} required/>
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
                      </div>
                    </form> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    
  };

export default Contact;