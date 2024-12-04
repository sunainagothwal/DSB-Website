import React from "react";
const Aboutus = () => {
  return (
    <div className="ltn__about-us-area pt-120-- pb-120" style={{marginTop:"100px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img src="assets/images/team/4.jpg" alt="About Us Image" />
              <div className="about-us-img-info about-us-img-info-2">
                <div className="about-us-img-info-inner">
                  <h1>
                    25<span>+</span>
                  </h1>
                  <h6>Years Experience</h6>
                  {/* <span class="dots-bottom"></span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  // About Us
                </h6>
                <h1 className="section-title">
                  Safety Is Our First &amp; Main Priority<span>.</span>
                </h1>
                <p>
                  We are a leading provider of high-performance tyre solutions,
                  offering products designed for safety, durability, and
                  efficiency
                </p>
              </div>
              <p>
                "We deliver premium tyre solutions engineered for performance,
                safety, and durability, backed by exceptional service and a
                commitment to driving excellence in every journey."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
