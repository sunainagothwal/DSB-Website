import React from 'react'

const Products = () => {
  const products = [
    {
      name: "K-RIBB01",
    },
  ];
  return (
    <>
      <div className="ltn__product-tab-area ltn__product-gutter pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Our Products</h1>
              </div>
              <div className="ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase text-center">
                <div className="nav">
                  <a
                    className="active show"
                    data-bs-toggle="tab"
                    href="#liton_tab_3_1"
                  >
                    Tires
                  </a>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_tab_3_1">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1 slick-initialized slick-slider">
                      {/* ltn__product-item */}
                      <div aria-live="polite" className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: 900,
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                          role="listbox"
                        >
                          <div
                            className="col-lg-12 slick-slide slick-current slick-active"
                            data-slick-index={0}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide20"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/Product1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    K-RIBB01
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={1}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide21"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/Product2.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    K-LUG03
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$62.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={2}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide22"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/Product3.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                   K-TRAIL1
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$75.00</span>
                                  <del>$92.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_2">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1 slick-initialized slick-slider">
                      <a className="slick-prev slick-arrow" style={{}}>
                        <i className="fas fa-arrow-left" alt="Arrow Icon" />
                      </a>
                      {/* ltn__product-item */}
                      <div aria-live="polite" className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: 4200,
                            transform: "translate3d(-1200px, 0px, 0px)",
                          }}
                          role="listbox"
                        >
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-4}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/7.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                        
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    OE Replica Wheels
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-3}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Wheel Bearing Retainer
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-2}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/2.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Brake Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$62.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-1}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/3.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Shock Mount Insulator
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$75.00</span>
                                  <del>$92.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-current slick-active"
                            data-slick-index={0}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide30"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/4.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Tail Light Lens
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$78.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={1}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide31"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/5.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Coil Spring Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={2}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide32"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/7.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    OE Replica Wheels
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={3}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide33"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Wheel Bearing Retainer
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide"
                            data-slick-index={4}
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide34"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/2.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Brake Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$62.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide"
                            data-slick-index={5}
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide35"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/3.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Shock Mount Insulator
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$75.00</span>
                                  <del>$92.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={6}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/4.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Tail Light Lens
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$78.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={7}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/5.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Coil Spring Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={8}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/7.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    OE Replica Wheels
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={9}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Wheel Bearing Retainer
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/*  */}
                      <a className="slick-next slick-arrow" style={{}}>
                        <i className="fas fa-arrow-right" alt="Arrow Icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_3">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1 slick-initialized slick-slider">
                      <a className="slick-prev slick-arrow" style={{}}>
                        <i className="fas fa-arrow-left" alt="Arrow Icon" />
                      </a>
                      {/* ltn__product-item */}
                      <div aria-live="polite" className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: 4200,
                            transform: "translate3d(-1200px, 0px, 0px)",
                          }}
                          role="listbox"
                        >
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-4}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/4.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Tail Light Lens
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$78.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-3}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/5.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Coil Spring Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-2}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/2.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Brake Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$62.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-1}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/3.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Shock Mount Insulator
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$75.00</span>
                                  <del>$92.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-current slick-active"
                            data-slick-index={0}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide40"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/7.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    OE Replica Wheels
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={1}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide41"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Wheel Bearing Retainer
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={2}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide42"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/4.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={0}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={0}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={0}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Tail Light Lens
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$78.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={3}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide43"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/5.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={0}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={0}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={0}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Coil Spring Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide"
                            data-slick-index={4}
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide44"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/2.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Brake Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$62.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide"
                            data-slick-index={5}
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide45"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/3.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Shock Mount Insulator
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$75.00</span>
                                  <del>$92.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={6}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/7.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    OE Replica Wheels
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={7}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Wheel Bearing Retainer
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={8}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/4.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Tail Light Lens
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$78.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={9}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/5.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                <div className="product-hover-action">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#quick_view_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-eye" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Add to Cart"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_to_cart_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="fas fa-shopping-cart" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        title="Wishlist"
                                        data-bs-toggle="modal"
                                        data-bs-target="#liton_wishlist_modal"
                                        tabIndex={-1}
                                      >
                                        <i className="far fa-heart" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Coil Spring Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/*  */}
                      <a className="slick-next slick-arrow" style={{}}>
                        <i className="fas fa-arrow-right" alt="Arrow Icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_4">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1 slick-initialized slick-slider">
                      <a className="slick-prev slick-arrow" style={{}}>
                        <i className="fas fa-arrow-left" alt="Arrow Icon" />
                      </a>
                      {/* ltn__product-item */}
                      <div aria-live="polite" className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: 4200,
                            transform: "translate3d(-1200px, 0px, 0px)",
                          }}
                          role="listbox"
                        >
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-4}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/7.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    OE Replica Wheels
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-3}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Wheel Bearing Retainer
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-2}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/4.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Tail Light Lens
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$78.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={-1}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/3.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Shock Mount Insulator
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$75.00</span>
                                  <del>$92.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-current slick-active"
                            data-slick-index={0}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide50"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/5.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Coil Spring Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={1}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide51"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/2.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Brake Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$62.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={2}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide52"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/7.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    OE Replica Wheels
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-active"
                            data-slick-index={3}
                            aria-hidden="false"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide53"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={0}>
                                  <img src="assets/images/product/1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={0}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={0}>
                                    Wheel Bearing Retainer
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide"
                            data-slick-index={4}
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide54"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/4.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Tail Light Lens
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$78.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide"
                            data-slick-index={5}
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                            role="option"
                            aria-describedby="slick-slide55"
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/3.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Shock Mount Insulator
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$75.00</span>
                                  <del>$92.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={6}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/5.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Coil Spring Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={7}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/2.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Brake Conversion Kit
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$62.00</span>
                                  <del>$85.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={8}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/7.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    OE Replica Wheels
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$150.00</span>
                                  <del>$180.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 slick-slide slick-cloned"
                            data-slick-index={9}
                            id=""
                            aria-hidden="true"
                            style={{ width: 300 }}
                            tabIndex={-1}
                          >
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              <div className="product-img">
                                <a href="product-details.html" tabIndex={-1}>
                                  <img src="assets/images/product/1.png" alt="#" />
                                </a>
                                <div className="product-badge">
                                  <ul>
                                    <li className="sale-badge">New</li>
                                  </ul>
                                </div>
                                {/* <div class="product-hover-action">
                                              <ul>
                                                  <li>
                                                      <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                          <i class="far fa-eye"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                          <i class="fas fa-shopping-cart"></i>
                                                      </a>
                                                  </li>
                                                  <li>
                                                      <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                          <i class="far fa-heart"></i></a>
                                                  </li>
                                              </ul>
                                          </div> */}
                              </div>
                              <div className="product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" tabIndex={-1}>
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h2 className="product-title">
                                  <a href="product-details.html" tabIndex={-1}>
                                    Wheel Bearing Retainer
                                  </a>
                                </h2>
                                <div className="product-price">
                                  <span>$149.00</span>
                                  <del>$162.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/* ltn__product-item */}
                      {/*  */}
                      <a className="slick-next slick-arrow" style={{}}>
                        <i className="fas fa-arrow-right" alt="Arrow Icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products