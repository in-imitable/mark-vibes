import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <Link className="navbar-brand mr-5" to="/">
              <img
                src="images/mvv.png"
                alt=""
                style={{ scale: 6 }}
                width="100%"
              />
              {/* <span> Mark Vibes </span> */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Home
                      {/* <span className="sr-only">(current)</span> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">
                      {" "}
                      Service{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact us
                    </NavLink>
                  </li>
                  <li className="nav-item" style={{ margin: "0 30px" }}>
                    <NavLink className="nav-link" to="/blogs">
                      Blog
                    </NavLink>
                  </li>
                  {/*</ul>*/}
                  {/*<form class="form-inline">*/}
                  {/* <button
                class="btn my-2 my-sm-0 nav_search-btn"
                type="submit"
              ></button> */}
                  <form className="form-inline">
                    {/* <button
                class="btn my-2 my-sm-0 nav_search-btn"
                type="submit"
              ></button> */}
                    <button
                      className="btn my-2 my-sm-0 btn-contact2"
                      type="submit"
                      data-toggle="modal"
                      data-target="#modal1"
                    >
                      Enquire Now
                    </button>
                  </form>
                </ul>
                {/* <form class="form-inline">
              <button
                class="btn my-2 my-sm-0 nav_search-btn"
                type="submit"
              ></button> */}
                {/*<div class="btn-box">*/}
                {/*      <button href="" class="btn-1 btn-contact" data-toggle="modal"*/}
                {/*data-target="#enqModal"> Enquire Now </button>*/}
                {/*</div>*/}
                {/*</form>*/}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  );
};

export default Header;
