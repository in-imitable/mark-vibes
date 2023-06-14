import React from "react";
import Header from "../partials/Header";

const Contact = () => {
  return (
    <>
    <div className="hero_area">
      <Header/>
      </div>
    <div className="body_bg layout_padding">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Contact Us</h2>
                </div>
                <p>
                  <br />
                  We would love to hear from you! At Mark-Vibes, we are
                  dedicated to providing exceptional service to our clients, and
                  we are always available to answer any questions or concerns
                  you may have.
                  <br />
                  <br />
                  If you would like to learn more about our services or request
                  a quote, please don't hesitate to contact us using the
                  information below:
                </p>
                {/*<a href=""> Get Started </a>*/}
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section */}
      <section className="contact_section">
        <div className="container">
          <div className="heading_container">
            <h2>Let's Get In Touch!</h2>
          </div>
        </div>
        <div className="container contact_bg layout_padding2-top">
          <div className="row">
            <div className="col-md-6">
              <div className="contact_form">
                <form method="post" id="formSubmitone">
                  <input
                    name="campaignid"
                    type="hidden"
                    defaultValue={2986216}
                  />
                  <input type="hidden" name="af5" defaultValue="" />
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required=""
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="number"
                      className="form-control"
                      required=""
                      placeholder="Mobile Number With Country Code"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required=""
                      placeholder="E-Mail Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="query"
                      className="form-control"
                      required=""
                      placeholder="Message"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="project"
                      className="form-control"
                      defaultValue="Mark Vibes"
                      style={{ display: "none" }}
                      hidden=""
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="ipaddress"
                      name="ip"
                      defaultValue=""
                      hidden=""
                    />
                  </div>
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-info micro-form-btn effetMoveGradient"
                  >
                    Get Quote
                  </button>
                  <div id="msgone" />
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/calling.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
    </div>
    </>
  );
};

export default Contact;
