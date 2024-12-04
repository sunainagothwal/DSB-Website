import React from "react";
const Clients = () => {
  return (
    <div className="ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                // Testimonials
              </h6>
              <h1 className="section-title">
                Clients Feedbacks<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1 slick-initialized slick-slider">
              <a className="slick-prev slick-arrow" style={{}}>
                <i className="fas fa-arrow-left" alt="Arrow Icon" />
              </a>
              <div aria-live="polite" className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{ opacity: 1, width: 2572 }}
                  role="listbox"
                >
                  <div
                    className="ltn__testimonial-item-5 slick-slide"
                    data-slick-index={0}
                    aria-hidden="true"
                    style={{
                      width: 643,
                      position: "relative",
                      left: 0,
                      top: 0,
                      zIndex: 998,
                      opacity: 0,
                      transition: "opacity 1500ms",
                    }}
                    tabIndex={-1}
                    role="option"
                    aria-describedby="slick-slide80"
                  >
                    <div className="ltn__quote-icon">
                      <i className="far fa-comments" />
                    </div>
                    <div className="ltn__testimonial-image">
                      <img src="assets/images/testimonial/1.jpg" alt="quote" />
                    </div>
                    <div className="ltn__testimonial-info">
                      <p>
                        Clients praise the tyre company for durable, reliable
                        products and excellent performance across conditions.
                        Positive reviews highlight good value for money,
                        efficient service, and professional staff.
                      </p>
                      <h4>Jacob William</h4>
                      <h6>Manager</h6>
                    </div>
                  </div>
                  <div
                    className="ltn__testimonial-item-5 slick-slide"
                    data-slick-index={1}
                    aria-hidden="true"
                    style={{
                      width: 643,
                      position: "relative",
                      left: "-643px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0,
                      transition: "opacity 1500ms",
                    }}
                    tabIndex={-1}
                    role="option"
                    aria-describedby="slick-slide81"
                  >
                    <div className="ltn__quote-icon">
                      <i className="far fa-comments" />
                    </div>
                    <div className="ltn__testimonial-image">
                      <img src="assets/images/testimonial/2.jpg" alt="quote" />
                    </div>
                    <div className="ltn__testimonial-info">
                      <p>
                        Quidem Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud ullamco laboris nisi ut aliquip ex ea.{" "}
                      </p>
                      <h4>Ethan James</h4>
                      <h6>Admin</h6>
                    </div>
                  </div>
                  <div
                    className="ltn__testimonial-item-5 slick-slide slick-current slick-active"
                    data-slick-index={2}
                    aria-hidden="false"
                    style={{
                      width: 643,
                      position: "relative",
                      left: "-1286px",
                      top: 0,
                      zIndex: 1000,
                      opacity: 1,
                      transition: "opacity 1500ms",
                    }}
                    tabIndex={-1}
                    role="option"
                    aria-describedby="slick-slide82"
                  >
                    <div className="ltn__quote-icon">
                      <i className="far fa-comments" />
                    </div>
                    <div className="ltn__testimonial-image">
                      <img src="assets/images/testimonial/3.jpg" alt="quote" />
                    </div>
                    <div className="ltn__testimonial-info">
                      <p>
                        Dolor Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud ullamco nisi ut aliquip ex ea commodo.{" "}
                      </p>
                      <h4>Noah Alexander</h4>
                      <h6>Professor</h6>
                    </div>
                  </div>
                  <div
                    className="ltn__testimonial-item-5 slick-slide"
                    data-slick-index={3}
                    aria-hidden="true"
                    style={{
                      width: 643,
                      position: "relative",
                      left: "-1929px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0,
                      transition: "opacity 1500ms",
                    }}
                    tabIndex={-1}
                    role="option"
                    aria-describedby="slick-slide83"
                  >
                    <div className="ltn__quote-icon">
                      <i className="far fa-comments" />
                    </div>
                    <div className="ltn__testimonial-image">
                      <img src="assets/images/testimonial/4.jpg" alt="quote" />
                    </div>
                    <div className="ltn__testimonial-info">
                      <p>
                        Amet Ipsum Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud nisi ut aliquip ex ea commodo.
                      </p>
                      <h4>Liam Mason</h4>
                      <h6>Officer</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a className="slick-next slick-arrow" style={{}}>
                <i className="fas fa-arrow-right" alt="Arrow Icon" />
              </a>
            </div>
            <ul className="ltn__testimonial-quote-menu d-none d-lg-block">
              <li>
                <img src="assets/images/testimonial/1.jpg" alt="Quote image" />
              </li>
              <li>
                <img src="assets/images/testimonial/2.jpg" alt="Quote image" />
              </li>
              <li>
                <img src="assets/images/testimonial/3.jpg" alt="Quote image" />
              </li>
              <li>
                <img src="assets/images/testimonial/4.jpg" alt="Quote image" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;
