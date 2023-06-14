import React from "react";
import Header from "../partials/Header";

const Home = () => {
  return (
    <>
      <div className="hero_area">
       <Header/>
        {/* slider section */}
        <section className="slider_section position-relative">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      >
        01
      </li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1">
        02
      </li>
    </ol> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <div>
                          <h1>
                            Welcome To <br />
                            <span> Mark Vibes ! </span>
                          </h1>
                          <p>
                            Our digital marketing services are designed to help
                            businesses build their online presence, reach their
                            target audience, and drive conversions. With years
                            of experience in the industry, our team of digital
                            marketing experts has a proven track record of
                            delivering results for our clients.
                            <br />
                            <br />
                            <span className="mt-5">
                              We take a comprehensive approach to digital
                              marketing, starting with an in-depth analysis of
                              your business objectives, target audience, and
                              competition. Based on this information, we'll
                              develop a customized digital marketing strategy
                              that is tailored to your specific needs and
                              budget.
                            </span>
                          </p>
                          <div className="btn-box">
                            <a
                              href=""
                              className="btn-1"
                              data-toggle="modal"
                              data-target="#modal1"
                            >
                              {" "}
                              Contact Us{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <div>
                          <h1>
                            {/*Welcome To <br />*/}
                            <span> Our Digital Marketing Services</span>
                          </h1>
                          <p>
                            {/*Our digital marketing services include: */}
                            {/*<br />*/}
                            1) Search engine optimization (SEO) to improve your
                            search engine rankings and drive traffic to your
                            website. <br />
                            2) Pay-per-click (PPC) advertising to reach your
                            target audience through targeted advertising
                            campaigns
                            <br />
                            3) Social media marketing to engage with your
                            audience and drive action through social media
                            platforms <br />
                            4) Email marketing to build relationships with your
                            audience and drive conversions through email
                            campaigns
                            <br />
                            5) Content marketing to create valuable, informative
                            content that resonates with your target audience and
                            drives traffic to your website <br />
                            6) Web development to create a website that is
                            visually appealing, easy to navigate, and optimized
                            for search engines
                          </p>
                          <div className="btn-box">
                            <a href="" className="btn-1">
                              {" "}
                              Contact Us{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="detail-box">
                <div>
                  <h1>
                    Welcome To <br />
                    <span> PPC Marketing</span>
                  </h1>
                  <p>
                    Our pay-per-click (PPC) advertising services are
                    designed to help businesses maximize their online
                    advertising budgets and drive more targeted traffic to
                    their website. With years of experience in the
                    industry, our team of PPC experts has a proven track
                    record of delivering results for our clients.
                  </p>
                  <div class="btn-box">
                    <a href="" class="btn-1"> Contact Us </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="detail-box">
                <div>
                  <h1>
                    Welcome To <br />
                    <span> Graphic Designing </span>
                  </h1>
                  <p>
                    Our graphic design services are designed to help
                    businesses create eye-catching visual content that
                    engages their target audience and communicates their
                    brand message effectively. With years of experience in
                    the industry, our team of graphic designers has a
                    proven track record of delivering results for our
                    clients.
                  </p>
                  <div class="btn-box">
                    <a href="" class="btn-1"> Contact Us </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            </div>
            <div className="custom_carousel-control">
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>

      {/* about section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  <br />
                  Welcome to Mark-Vibes! We are a team of experienced
                  professionals who are dedicated to helping businesses grow and
                  succeed in the online world.
                  <br />
                  Our mission is to provide top-notch digital marketing
                  solutions that are tailored to meet the unique needs of each
                  of our clients. Whether you're looking to increase your online
                  visibility, generate more leads, or improve your overall
                  online reputation, we have the skills and expertise to help
                  you achieve your goals. <br />
                  Under this organization, we offer a wide range of services,
                  including search engine optimization (SEO), social media
                  marketing, pay-per-click advertising (PPC), content marketing,
                  and more. We work closely with our clients to understand their
                  business goals and develop customized strategies that will
                  help them achieve those goals.
                </p>
                <a href="" data-toggle="modal" data-target="#modal1">
                  {" "}
                  Get Quote{" "}
                </a>
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
      {/* end about section */}

      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Why should you choose us?</h2>
                </div>
                <p>
                  <br />
                  Customized Approach: We take a customized approach to digital
                  marketing, developing a strategy that is tailored to the
                  specific needs of each client. This allows us to deliver
                  results that are truly impactful and aligned with the client's
                  business objectives.
                  <br />
                  Experienced Team: Our team of digital marketing experts has
                  years of experience in the industry and a proven track record
                  of delivering results for our clients. We stay up-to-date with
                  the latest trends and best practices in digital marketing to
                  ensure that our clients are always ahead of the curve.
                  <br />
                  Data-Driven Decision Making: We believe in data-driven
                  decision making, using detailed analytics and reporting to
                  track progress and make informed decisions about our clients'
                  digital marketing strategies. This approach allows us to
                  optimize campaigns for maximum results and return on
                  investment (ROI).
                  <br />
                  Comprehensive Services: We offer a wide range of digital
                  marketing services, including SEO, PPC advertising, social
                  media marketing, email marketing, content marketing, and web
                  development. This allows us to provide our clients with a
                  comprehensive solution for all their online marketing needs.
                  <br />
                  Customer Satisfaction: Our top priority is customer
                  satisfaction. We work closely with our clients to ensure that
                  we're achieving their business objectives and delivering
                  results that exceed their expectations. We pride ourselves on
                  our strong client relationships and our ability to help
                  businesses succeed online.
                </p>
                <a href="" data-toggle="modal" data-target="#modal1">
                  {" "}
                  Get Quote{" "}
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/dg.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="body_bg layout_padding">
        {/* client section */}
        {/*  <section class="client_section layout_padding-top">
  <div class="d-flex justify-content-center">
    <div class="heading_container">
      <h2>Testimonial</h2>
    </div>
  </div>
  <div class="container layout_padding2">
    <div
      id="carouselExample2Indicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExample2Indicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li
          data-target="#carouselExample2Indicators"
          data-slide-to="1"
        ></li>
        <li
          data-target="#carouselExample2Indicators"
          data-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item">
          <div class="client_container">
            <div class="client-id">
              <div class="img-box">
                <img src="images/client.jpg" alt="" />
              </div>
              <div class="client_name">
                <div>
                  <h3>Atul Kumar</h3>
                  <p>CEO, Amazon</p>
                </div>
              </div>
            </div>
            <div class="client_detail">
              <div class="client_text">
                <blockquote>
                  <p>
                    I had a great experience working with this digital
                    marketing and SEO website. Their team is extremely
                    knowledgeable and helped me increase my website
                    traffic and conversions through various digital
                    marketing techniques. They are always available to
                    answer any questions and provide ongoing support to
                    ensure my online success.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <div class="client_container">
            <div class="client-id">
              <div class="img-box">
                <img src="images/client.jpg" alt="" />
              </div>
              <div class="client_name">
                <div>
                  <h3>Harsh Singh</h3>
                  <p>CEO, Google</p>
                </div>
              </div>
            </div>
            <div class="client_detail">
              <div class="client_text">
                <blockquote>
                  <p>
                    I was struggling to get my website to rank on search
                    engines until I found this digital marketing and SEO
                    website. Their team of experts helped me identify the
                    areas where my website needed improvement and
                    developed a customized strategy to improve my search
                    engine rankings. Thanks to their efforts, my website
                    is now ranking on the first page of Google.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="client_container">
            <div class="client-id">
              <div class="img-box">
                <img src="images/client.jpg" alt="" />
              </div>
              <div class="client_name">
                <div>
                  <h3>Nitin Kukreti</h3>
                  <p>CEO, Apple</p>
                </div>
              </div>
            </div>
            <div class="client_detail">
              <div class="client_text">
                <blockquote>
                  <p>
                    If you're looking for a digital marketing and SEO
                    company that truly delivers results, look no further
                    than this website. Their team of experts is passionate
                    about helping their clients succeed and provides a
                    comprehensive range of services that helped me
                    increase my website's visibility and drive more
                    traffic.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="client_container">
            <div class="client-id">
              <div class="img-box">
                <img src="images/client.jpg" alt="" />
              </div>
              <div class="client_name">
                <div>
                  <h3>Unknown</h3>
                  <p>CEO, Another Planet</p>
                </div>
              </div>
            </div>
            <div class="client_detail">
              <div class="client_text">
                <blockquote>
                  <p>
                    I've worked with many digital marketing and SEO
                    companies over the years, but none have been as
                    effective as this website. Their team is incredibly
                    skilled and uses the latest techniques to help their
                    clients succeed. I highly recommend their services to
                    anyone looking to improve their online presence.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
        {/* end client section */}
        {/* quote section */}
        {/* <section class="quote_section layout_padding">
  <div class="container">
    <div class="box">
      <div class="detail-box">
        <h3>Get Your Quote Today!</h3>
        <p>
          It is a long established fact that a reader will be distracted
          by the readable content of a page
        </p>
      </div>
      <div class="btn-box">
        <a href=""> Get A Quote </a>
      </div>
    </div>
  </div>
</section> */}
        {/* end quote section */}
      </div>

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
                  <input name="campaignid" type="hidden" defaultValue="" />
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
                    data-toggle="modal"
                    data-target="#modal1"
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
      {/*end of contact section */}
    </>
  );
};

export default Home;
