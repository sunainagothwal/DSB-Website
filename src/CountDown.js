import React from 'react'

const CountDown = () => {
  return (
    <>
      <div
        className="ltn__countdown-area section-bg-1 bg-image"
        data-bs-bg="assets/images/bg/14.jpg"
        style={{ backgroundImage: 'url("assets/images/bg/14.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="ltn__countdown-info text-center pt-100 pb-100">
                <div className="section-title-area ltn__section-title-2 mb-0">
                  <h1 className="section-title">
                    Hot Deal ! Sale Up To <span>25% Off</span>
                  </h1>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque consequatur sequi quisquam, aspernatur nulla
                  minima.
                </p>
                <div
                  className="ltn__countdown ltn__countdown-1 bg-white"
                  data-countdown="2024/12/01"
                >
                  <div className="single">
                    <h1>00</h1>
                    <p>Days</p>
                  </div>{" "}
                  <div className="single">
                    <h1>00</h1>
                    <p>Hrs</p>
                  </div>{" "}
                  <div className="single">
                    <h1>00</h1>
                    <p>Mins</p>
                  </div>{" "}
                  <div className="single">
                    <h1>00</h1>
                    <p>Secs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="countdown-img d-none d-lg-block">
                <img src="assets/images/bg/11.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDown