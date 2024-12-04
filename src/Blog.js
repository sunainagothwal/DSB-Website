import React from "react";
const Blog = () => {
  return (
    <div className="ltn__blog-area pt-115 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                // blog &amp; insights
              </h6>
              <h1 className="section-title">
                News Feeds<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row ltn__blog-slider-one-active slick-arrow-1 slick-initialized slick-slider">
          <a className="slick-prev slick-arrow" style={{}}>
            <i className="fas fa-arrow-left" alt="Arrow Icon" />
          </a>
          <div aria-live="polite" className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 4400,
                transform: "translate3d(-1200px, 0px, 0px)",
              }}
              role="listbox"
            >
              <div
                className="col-lg-12 slick-slide slick-cloned"
                data-slick-index={-3}
                id=""
                aria-hidden="true"
                style={{ width: 400 }}
                tabIndex={-1}
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/3.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/3.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={-1}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={-1}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={-1}>
                        How to Prepare for your First Track Day!
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum labore et dolore mag na aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={-1}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide slick-cloned"
                data-slick-index={-2}
                id=""
                aria-hidden="true"
                style={{ width: 400 }}
                tabIndex={-1}
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/4.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/4.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={-1}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={-1}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={-1}>
                        The branch of biology that deals with the normal.
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum labore et dolore mag na aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={-1}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide slick-cloned"
                data-slick-index={-1}
                id=""
                aria-hidden="true"
                style={{ width: 400 }}
                tabIndex={-1}
              >
                <div className="ltn__blog-item ltn__blog-item-4">
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={-1}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={-1}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={-1}>
                        How to: Make Your Tires Last Longer
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum labore et dolore mag na aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={-1}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{ width: 400 }}
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide60"
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/1.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/1.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={0}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={0}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={0}>
                        Electric Car Maintenance, Servicing &amp; Repairs
                      </a>
                    </h3>
                    <p>
                      Electric car maintenance ensures battery, brake, and tire
                      health for optimal performance.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={0}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide slick-active"
                data-slick-index={1}
                aria-hidden="false"
                style={{ width: 400 }}
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide61"
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/2.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/2.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={0}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={0}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={0}>
                        Common Engine Oil Problems and Solutions
                      </a>
                    </h3>
                    <p>
                      Common engine oil issues like low levels and contamination
                      can be solved with regular checks and timely oil changes.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={0}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide slick-active"
                data-slick-index={2}
                aria-hidden="false"
                style={{ width: 400 }}
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide62"
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/3.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/3.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={0}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={0}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={0}>
                        How to Prepare for your First Track Day!
                      </a>
                    </h3>
                    <p>
                      Prepare for your first track day by checking your car’s
                      condition, tire pressure, fluids, and bringing a helmet.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={0}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide"
                data-slick-index={3}
                aria-hidden="true"
                style={{ width: 400 }}
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide63"
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/4.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/4.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={-1}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={-1}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={-1}>
                        The branch of biology that deals with the normal.
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum labore et dolore mag na aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={-1}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide"
                data-slick-index={4}
                aria-hidden="true"
                style={{ width: 400 }}
                tabIndex={-1}
                role="option"
                aria-describedby="slick-slide64"
              >
                <div className="ltn__blog-item ltn__blog-item-4">
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={-1}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={-1}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={-1}>
                        How to: Make Your Tires Last Longer
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum labore et dolore mag na aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={-1}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide slick-cloned"
                data-slick-index={5}
                id=""
                aria-hidden="true"
                style={{ width: 400 }}
                tabIndex={-1}
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/1.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/1.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={-1}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={-1}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={-1}>
                        Electric Car Maintenance, Servicing &amp; Repairs
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum labore et dolore mag na aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={-1}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide slick-cloned"
                data-slick-index={6}
                id=""
                aria-hidden="true"
                style={{ width: 400 }}
                tabIndex={-1}
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/2.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/2.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={-1}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={-1}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={-1}>
                        Common Engine Oil Problems and Solutions
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum labore et dolore mag na aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={-1}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 slick-slide slick-cloned"
                data-slick-index={7}
                id=""
                aria-hidden="true"
                style={{ width: 400 }}
                tabIndex={-1}
              >
                <div
                  className="ltn__blog-item ltn__blog-item-4 bg-image"
                  data-bs-bg="assets/images/blog/3.jpg"
                  style={{ backgroundImage: 'url("assets/images/blog/3.jpg")' }}
                >
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <a href="#" tabIndex={-1}>
                            <i className="far fa-user" />
                            by: Admin
                          </a>
                        </li>
                        <li className="ltn__blog-tags">
                          <a href="#" tabIndex={-1}>
                            <i className="fas fa-tags" />
                            Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title animated fadeIn">
                      <a href="blog-details.html" tabIndex={-1}>
                        How to Prepare for your First Track Day!
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum labore et dolore mag na aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" /> June 24, 2020
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <a href="blog-details.html" tabIndex={-1}>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="slick-next slick-arrow" style={{}}>
            <i className="fas fa-arrow-right" alt="Arrow Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Blog;
