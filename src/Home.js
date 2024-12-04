import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Aboutus from "./Aboutus";
import Products from "./Products";
import CountDown from "./CountDown";

import Call from "./Call";
import Toprated from "./Toprated";
import Newsletter from "./Newsletter";
import Clients from "./Clients";
import Brand from "./Brand";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <div className="ltn__slider-area ltn__slider-6 mb-120---">
        <div
          className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 slick-initialized slick-slider slick-dotted"
          role="toolbar"
        >
          <a className="slick-prev slick-arrow" style={{}}>
            <i className="fas fa-arrow-left" alt="Arrow Icon" />
          </a>
          {/* ltn__slide-item */}
          <div aria-live="polite" className="slick-list draggable">
            <div
              className="slick-track"
              style={{ opacity: 1, width: 4560 }}
              role="listbox"
            >
              <div
                className="ltn__slide-item section-bg-1 slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{
                  width: 1520,
                  position: "relative",
                  left: 0,
                  top: 0,
                  zIndex: 999,
                  opacity: 1,
                }}
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide00"
              >
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Welcome to our shop
                            </h4>
                            <h1 className="slide-title  animated">
                              Get $250 In Total Discounts On A New Set Of Tires
                            </h1>
                            <div className="slide-brief animated">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
                              </p>
                            </div>
                            <div className="btn-wrapper  animated">
                              <a
                                href="shop.html"
                                className="theme-btn-1 btn btn-effect-1 text-uppercase"
                                tabIndex={0}
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          <a href="shop.html" tabIndex={0}>
                            <img
                              src="assets/images/product/1.png"
                              alt="Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ltn__slide-item section-bg-1 slick-slide"
                data-slick-index={1}
                aria-hidden="true"
                style={{
                  width: 1520,
                  position: "relative",
                  left: "-1520px",
                  top: 0,
                  zIndex: 998,
                  opacity: 0,
                }}
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide01"
              >
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          <a href="shop.html" tabIndex={-1}>
                            <img
                              src="assets/images/product/9.png"
                              alt="Image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Welcome to our shop
                            </h4>
                            <h1 className="slide-title animated">
                              The Parts Of Shock Absorbers Assembly
                            </h1>
                            <div className="slide-brief animated">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
                              </p>
                            </div>
                            <div className="btn-wrapper animated">
                              <a
                                href="shop.html"
                                className="theme-btn-1 btn btn-effect-1 text-uppercase"
                                tabIndex={-1}
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ltn__slide-item section-bg-1 slick-slide"
                data-slick-index={2}
                aria-hidden="true"
                style={{
                  width: 1520,
                  position: "relative",
                  left: "-3040px",
                  top: 0,
                  zIndex: 998,
                  opacity: 0,
                }}
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide02"
              >
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Welcome to our shop
                            </h4>
                            <h1 className="slide-title  animated">
                              Get $250 In Total Discounts On A New Set Of Tires
                            </h1>
                            <div className="slide-brief animated">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
                              </p>
                            </div>
                            <div className="btn-wrapper  animated">
                              <a
                                href="shop.html"
                                className="theme-btn-1 btn btn-effect-1 text-uppercase"
                                tabIndex={-1}
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          <a href="shop.html" tabIndex={-1}>
                            <img
                              src="assets/images/product/11.png"
                              alt="Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__slide-item */}
          {/* ltn__slide-item */}
          <a className="slick-next slick-arrow" style={{}}>
            <i className="fas fa-arrow-right" alt="Arrow Icon" />
          </a>
          <ul className="slick-dots" style={{}} role="tablist">
            <li
              className="slick-active"
              aria-hidden="false"
              role="presentation"
              aria-selected="true"
              aria-controls="navigation00"
              id="slick-slide00"
            >
              <button type="button" data-role="none" role="button" tabIndex={0}>
                1
              </button>
            </li>
            <li
              aria-hidden="true"
              role="presentation"
              aria-selected="false"
              aria-controls="navigation01"
              id="slick-slide01"
            >
              <button type="button" data-role="none" role="button" tabIndex={0}>
                2
              </button>
            </li>
            <li
              aria-hidden="true"
              role="presentation"
              aria-selected="false"
              aria-controls="navigation02"
              id="slick-slide02"
            >
              <button type="button" data-role="none" role="button" tabIndex={0}>
                3
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Aboutus />
      <Products />
      <CountDown />

      <Call />
      <Toprated />
      <Newsletter />
      <Clients />
      <Brand />
      <Blog />
    </>
  );
};

export default Home;
