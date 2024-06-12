import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faAddressCard, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart() {
  return (
    <div>
  {/* =========================================================
* Vuexy - Bootstrap Admin Template | v9.0.0
==============================================================

* Product Page: https://1.envato.market/vuexy_admin
* Created by: Pixinvent
* License: You must have a valid license purchased in order to legally use the theme for your project.
* Copyright Pixinvent (https://pixinvent.com)

=========================================================
 */}
  {/* beautify ignore:start */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
  <title>Checkout Card - Front Pages | Vuexy - Bootstrap Admin Template</title>
  <meta name="description" content="Start your development with a Dashboard for Bootstrap 5" />
  <meta name="keywords" content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5" />
  {/* Canonical SEO */}
  <link rel="canonical" href="https://1.envato.market/vuexy_admin" />
  {/* ? PROD Only: Google Tag Manager (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) */}
  {/* End Google Tag Manager */}
  {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="src/assets/images/favicon/favicon.ico" />
  {/* Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap" rel="stylesheet" />
  <link rel="stylesheet" href="src/assets/vendor/fonts/tabler-icons.css" />
  {/* Core CSS */}
  <link rel="stylesheet" href="src/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
  <link rel="stylesheet" href="src/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
  <link rel="stylesheet" href="src/assets/css/demo.css" />
  <link rel="stylesheet" href="src/assets/vendor/css/pages/front-page.css" />
  {/* Vendors CSS */}
  <link rel="stylesheet" href="src/assets/vendor/libs/node-waves/node-waves.css" />
  <link rel="stylesheet" href="src/assets/vendor/libs/select2/select2.css" />
  <link rel="stylesheet" href="src/assets/vendor/libs/bs-stepper/bs-stepper.css" />
  <link rel="stylesheet" href="src/assets/vendor/libs/rateyo/rateyo.css" />
  <link rel="stylesheet" href="src/assets/vendor/libs/@form-validation/form-validation.css" />
  {/* Page CSS */}
  <link rel="stylesheet" href="src/assets/vendor/css/pages/wizard-ex-checkout.css" />
  {/* Helpers */}
  {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
  {/*? Template customizer: To hide customizer set displayCustomizer value false in config.js.  */}
  {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
  {/* ?PROD Only: Google Tag Manager (noscript) (Default ThemeSelection: GTM-5DDHKGP, PixInvent: GTM-5J3LMKC) */}
  <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  ></iframe>
</noscript>
  {/* End Google Tag Manager (noscript) */}
  {/* Navbar: Start */}

  {/* Navbar: End */}
  {/* Sections:Start */}
  <section className="section-py bg-body first-section-pt">
    <div className="container">
      {/*/ Checkout Wizard */}
      {/* Checkout Wizard */}
      <div id="wizard-checkout" className="bs-stepper wizard-icons wizard-icons-example mb-5">
        <div className="bs-stepper-header m-auto border-0 py-4">
          <div className="step" data-target="#checkout-cart">
            <button type="button" className="step-trigger">
              <span className="bs-stepper-icon">
                <svg viewBox="0 0 58 54">
                <FontAwesomeIcon icon={faCartShopping} />
                </svg>
              </span>
              <span className="bs-stepper-label">Cart</span>
            </button>
          </div>
          <div className="line">
            <i className="ti ti-chevron-right" />
          </div>
          <div className="step" data-target="#checkout-address">
            <button type="button" className="step-trigger">
              <span className="bs-stepper-icon">
                <svg viewBox="0 0 54 54">
                <FontAwesomeIcon icon={faAddressCard} />
                </svg>
              </span>
              <span className="bs-stepper-label">Address</span>
            </button>
          </div>
          <div className="line">
            <i className="ti ti-chevron-right" />
          </div>
          <div className="step" data-target="#checkout-confirmation">
            <button type="button" className="step-trigger">
              <span className="bs-stepper-icon">
                <svg viewBox="0 0 58 54">
                <FontAwesomeIcon icon={faCircleCheck} />
                </svg>
              </span>
              <span className="bs-stepper-label">Confirmation</span>
            </button>
          </div>
        </div>
        <div className="bs-stepper-content border-top">
          <form id="wizard-checkout-form" onSubmit="return false">
            {/* Cart */}
            <div id="checkout-cart" className="content">
              <div className="row">
                {/* Cart left */}
                <div className="col-xl-8 mb-3 mb-xl-0">
                  {/* Offer alert */}
                  <div className="alert alert-success mb-3" role="alert">
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <i className="ti ti-bookmarks ti-sm alert-icon alert-icon-lg" />
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-medium fs-5 mb-2">Available Offers</div>
                        <ul className="list-unstyled mb-0">
                          <li> - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards</li>
                          <li> - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA</li>
                        </ul>
                      </div>
                    </div>
                    <button type="button" className="btn-close btn-pinned" data-bs-dismiss="alert" aria-label="Close" />
                  </div>
                  {/* Shopping bag */}
                  <h5>My Shopping Bag (2 Items)</h5>
                  <ul className="list-group mb-3">
                    <li className="list-group-item p-4">
                      <div className="d-flex gap-3">
                        <div className="flex-shrink-0 d-flex align-items-center">
                          <img src="src/assets/images/products/1.png" alt="google home" className="w-px-100" />
                        </div>
                        <div className="flex-grow-1">
                          <div className="row">
                            <div className="col-md-8">
                              <p className="me-3"><a href="javascript:void(0)" className="text-body">Google - Google Home - White</a></p>
                              <div className="text-muted mb-2 d-flex flex-wrap"><span className="me-1">Sold by:</span> <a href="javascript:void(0)" className="me-3">Apple</a> <span className="badge bg-label-success">In Stock</span></div>
                              <div className="read-only-ratings mb-3" data-rateyo-read-only="true" />
                              <input type="number" className="form-control form-control-sm w-px-100 mt-2" defaultValue={1} min={1} max={5} />
                            </div>
                            <div className="col-md-4">
                              <div className="text-md-end">
                                <button type="button" className="btn-close btn-pinned" aria-label="Close" />
                                <div className="my-2 my-md-4 mb-md-5"><span className="text-primary">$299/</span><s className="text-muted">$359</s></div>
                                <button type="button" className="btn btn-sm btn-label-primary mt-md-3">Move to wishlist</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item p-4">
                      <div className="d-flex gap-3">
                        <div className="flex-shrink-0 d-flex align-items-center">
                          <img src="src/assets/images/products/2.png" alt="google home" className="w-px-100" />
                        </div>
                        <div className="flex-grow-1">
                          <div className="row">
                            <div className="col-md-8">
                              <p className="me-3"><a href="javascript:void(0)" className="text-body">Apple iPhone 11 (64GB, Black)</a></p>
                              <div className="text-muted mb-2 d-flex flex-wrap"><span className="me-1">Sold by:</span> <a href="javascript:void(0)" className="me-3">Apple</a> <span className="badge bg-label-success">In Stock</span></div>
                              <div className="read-only-ratings mb-3" data-rateyo-read-only="true" />
                              <input type="number" className="form-control form-control-sm w-px-100 mt-2" defaultValue={1} min={1} max={5} />
                            </div>
                            <div className="col-md-4">
                              <div className="text-md-end">
                                <button type="button" className="btn-close btn-pinned" aria-label="Close" />
                                <div className="my-2 my-md-4 mb-md-5"><span className="text-primary">$299/</span><s className="text-muted">$359</s></div>
                                <button type="button" className="btn btn-sm btn-label-primary mt-md-3">Move to wishlist</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* Wishlist */}
                  <div className="list-group">
                    <a href="javascript:void(0)" className="list-group-item d-flex justify-content-between">
                      <span>Add more products from wishlist</span>
                      <i className="ti ti-sm ti-chevron-right scaleX-n1-rtl" />
                    </a>
                  </div>
                </div>
                {/* Cart right */}
                <div className="col-xl-4">
                  <div className="border rounded p-4 mb-3 pb-3">
                    {/* Offer */}
                    <h6>Offer</h6>
                    <div className="row g-3 mb-3">
                      <div className="col-8 col-xxl-8 col-xl-12">
                        <input type="text" className="form-control" placeholder="Enter Promo Code" aria-label="Enter Promo Code" />
                      </div>
                      <div className="col-4 col-xxl-4 col-xl-12">
                        <div className="d-grid">
                          <button type="button" className="btn btn-label-primary">Apply</button>
                        </div>
                      </div>
                    </div>
                    {/* Gift wrap */}
                    <div className="bg-lighter rounded p-3">
                      <p className="fw-medium mb-2">Buying gift for a loved one?</p>
                      <p className="mb-2">Gift wrap and personalized message on card, Only for $2.</p>
                      <a href="javascript:void(0)" className="fw-medium">Add a gift wrap</a>
                    </div>
                    <hr className="mx-n4" />
                    {/* Price Details */}
                    <h6>Price Details</h6>
                    <dl className="row mb-0">
                      <dt className="col-6 fw-normal text-heading">Bag Total</dt>
                      <dd className="col-6 text-end">$1198.00</dd>
                      <dt className="col-sm-6 fw-normal">Coupon Discount</dt>
                      <dd className="col-sm-6 text-end"><a href="javascript:void(0)">Apply Coupon</a></dd>
                      <dt className="col-6 fw-normal text-heading">Order Total</dt>
                      <dd className="col-6 text-end">$1198.00</dd>
                      <dt className="col-6 fw-normal text-heading">Delivery Charges</dt>
                      <dd className="col-6 text-end"><s className="text-muted">$5.00</s> <span className="badge bg-label-success ms-1">Free</span></dd>
                    </dl>
                    <hr className="mx-n4" />
                    <dl className="row mb-0">
                      <dt className="col-6 text-heading">Total</dt>
                      <dd className="col-6 fw-medium text-end text-heading mb-0">$1198.00</dd>
                    </dl>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-next">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Address */}
            <div id="checkout-address" className="content">
              <div className="row">
                {/* Address left */}
                <div className="col-xl-8  col-xxl-9 mb-3 mb-xl-0">
                  {/* Select address */}
                  <p>Select your preferable address</p>
                  <div className="row mb-3">
                    <div className="col-md mb-md-0 mb-2">
                      <div className="form-check custom-option custom-option-basic checked">
                        <label className="form-check-label custom-option-content" htmlFor="customRadioAddress1">
                          <input name="customRadioTemp" className="form-check-input" type="radio" defaultValue id="customRadioAddress1" defaultChecked />
                          <span className="custom-option-header mb-2">
                            <span className="fw-medium text-heading mb-0">John Doe (Default)</span>
                            <span className="badge bg-label-primary">Home</span>
                          </span>
                          <span className="custom-option-body">
                            <small>4135 Parkway Street, Los Angeles, CA, 90017.<br /> Mobile : 1234567890 Card / Cash on delivery available</small>
                            <span className="my-2 border-bottom d-block" />
                            <span className="d-flex">
                              <a className="me-2" href="javascript:void(0)">Edit</a> <a href="javascript:void(0)">Remove</a>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-check custom-option custom-option-basic">
                        <label className="form-check-label custom-option-content" htmlFor="customRadioAddress2">
                          <input name="customRadioTemp" className="form-check-input" type="radio" defaultValue id="customRadioAddress2" />
                          <span className="custom-option-header mb-2">
                            <span className="fw-medium text-heading mb-0">ACME Inc.</span>
                            <span className="badge bg-label-success">Office</span>
                          </span>
                          <span className="custom-option-body">
                            <small>87 Hoffman Avenue, New York, NY, 10016.<br />Mobile : 1234567890 Card / Cash on delivery available</small>
                            <span className="my-2 border-bottom d-block" />
                            <span className="d-flex">
                              <a className="me-2" href="javascript:void(0)">Edit</a> <a href="javascript:void(0)">Remove</a>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-label-primary mb-4" data-bs-toggle="modal" data-bs-target="#addNewAddress">Add new address</button>
                  {/* Choose Delivery */}
                  <p>Choose Delivery Speed</p>
                  <div className="row mt-2">
                    <div className="col-md mb-md-0 mb-2">
                      <div className="form-check custom-option custom-option-icon position-relative checked">
                        <label className="form-check-label custom-option-content" htmlFor="customRadioDelivery1">
                          <span className="custom-option-body">
                            <i className="ti ti-users ti-lg" />
                            <span className="custom-option-title mb-1">Standard</span>
                            <span className="badge bg-label-success btn-pinned">FREE</span>
                            <small>Get your product in 1 Week.</small>
                          </span>
                          <input name="customRadioIcon" className="form-check-input" type="radio" defaultValue id="customRadioDelivery1" defaultChecked />
                        </label>
                      </div>
                    </div>
                    <div className="col-md mb-md-0 mb-2">
                      <div className="form-check custom-option custom-option-icon position-relative">
                        <label className="form-check-label custom-option-content" htmlFor="customRadioDelivery2">
                          <span className="custom-option-body">
                            <i className="ti ti-crown ti-lg" />
                            <span className="custom-option-title mb-1">Express</span>
                            <span className="badge bg-label-secondary btn-pinned">$10</span>
                            <small>Get your product in 3-4 days.</small>
                          </span>
                          <input name="customRadioIcon" className="form-check-input" type="radio" defaultValue id="customRadioDelivery2" />
                        </label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-check custom-option custom-option-icon position-relative">
                        <label className="form-check-label custom-option-content" htmlFor="customRadioDelivery3">
                          <span className="custom-option-body">
                            <i className="ti ti-brand-telegram ti-lg" />
                            <span className="custom-option-title mb-1">Overnight</span>
                            <span className="badge bg-label-secondary btn-pinned">$15</span>
                            <small>Get your product in 0-1 days.</small>
                          </span>
                          <input name="customRadioIcon" className="form-check-input" type="radio" defaultValue id="customRadioDelivery3" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Address right */}
                <div className="col-xl-4 col-xxl-3">
                  <div className="border rounded p-4 pb-3 mb-3">
                    {/* Estimated Delivery */}
                    <h6>Estimated Delivery Date</h6>
                    <ul className="list-unstyled">
                      <li className="d-flex gap-3 align-items-center">
                        <div className="flex-shrink-0">
                          <img src="src/assets/images/products/1.png" alt="google home" className="w-px-50" />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0"><a className="text-body" href="javascript:void(0)">Google - Google Home - White</a></p>
                          <p className="fw-medium">18th Nov 2021</p>
                        </div>
                      </li>
                      <li className="d-flex gap-3 align-items-center">
                        <div className="flex-shrink-0">
                          <img src="src/assets/images/products/2.png" alt="google home" className="w-px-50" />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0"><a className="text-body" href="javascript:void(0)">Apple iPhone 11 (64GB, Black)</a></p>
                          <p className="fw-medium">20th Nov 2021</p>
                        </div>
                      </li>
                    </ul>
                    <hr className="mx-n4" />
                    {/* Price Details */}
                    <h6>Price Details</h6>
                    <dl className="row mb-0">
                      <dt className="col-6 fw-normal text-heading">Order Total</dt>
                      <dd className="col-6 text-end">$1198.00</dd>
                      <dt className="col-6 fw-normal text-heading">Delivery Charges</dt>
                      <dd className="col-6 text-end"><s className="text-muted">$5.00</s> <span className="badge bg-label-success ms-1">Free</span></dd>
                    </dl>
                    <hr className="mx-n4" />
                    <dl className="row mb-0">
                      <dt className="col-6 text-heading">Total</dt>
                      <dd className="col-6 fw-medium text-end text-heading mb-0">$1198.00</dd>
                    </dl>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-next">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment */}
            <div id="checkout-payment" className="content">
              <div className="row">
                {/* Payment left */}
                <div className="col-xl-8 col-xxl-9 mb-3 mb-xl-0">
                  {/* Offer alert */}
                  <div className="alert alert-success" role="alert">
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <i className="ti ti-bookmarks ti-sm alert-icon alert-icon-lg" />
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-medium mb-2">Bank Offers</div>
                        <ul className="list-unstyled mb-0">
                          <li> - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards</li>
                        </ul>
                      </div>
                    </div>
                    <button type="button" className="btn-close btn-pinned" data-bs-dismiss="alert" aria-label="Close" />
                  </div>
                  {/* Payment Tabs */}
                  <div className="col-xxl-6 col-lg-8">
                    <ul className="nav nav-pills card-header-pills mb-3" id="paymentTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-cc-tab" data-bs-toggle="pill" data-bs-target="#pills-cc" type="button" role="tab" aria-controls="pills-cc" aria-selected="true">Card</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-cod-tab" data-bs-toggle="pill" data-bs-target="#pills-cod" type="button" role="tab" aria-controls="pills-cod" aria-selected="false">Cash On Delivery</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-gift-card-tab" data-bs-toggle="pill" data-bs-target="#pills-gift-card" type="button" role="tab" aria-controls="pills-gift-card" aria-selected="false">Gift Card</button>
                      </li>
                    </ul>
                    <div className="tab-content px-0" id="paymentTabsContent">
                      {/* Credit card */}
                      <div className="tab-pane fade show active" id="pills-cc" role="tabpanel" aria-labelledby="pills-cc-tab">
                        <div className="row g-3">
                          <div className="col-12">
                            <label className="form-label w-100" htmlFor="paymentCard">Card Number</label>
                            <div className="input-group input-group-merge">
                              <input id="paymentCard" name="paymentCard" className="form-control credit-card-mask" type="text" placeholder="1356 3215 6548 7898" aria-describedby="paymentCard2" />
                              <span className="input-group-text cursor-pointer p-1" id="paymentCard2"><span className="card-type" /></span>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="paymentCardName">Name</label>
                            <input type="text" id="paymentCardName" className="form-control" placeholder="John Doe" />
                          </div>
                          <div className="col-6 col-md-3">
                            <label className="form-label" htmlFor="paymentCardExpiryDate">Exp. Date</label>
                            <input type="text" id="paymentCardExpiryDate" className="form-control expiry-date-mask" placeholder="MM/YY" />
                          </div>
                          <div className="col-6 col-md-3">
                            <label className="form-label" htmlFor="paymentCardCvv">CVV Code</label>
                            <div className="input-group input-group-merge">
                              <input type="text" id="paymentCardCvv" className="form-control cvv-code-mask" maxLength={3} placeholder={654} />
                              <span className="input-group-text cursor-pointer" id="paymentCardCvv2"><i className="ti ti-help text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Card Verification Value" /></span>
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="switch">
                              <input type="checkbox" className="switch-input" />
                              <span className="switch-toggle-slider">
                                <span className="switch-on" />
                                <span className="switch-off" />
                              </span>
                              <span className="switch-label">Save card for future billing?</span>
                            </label>
                          </div>
                          <div className="col-12">
                            <button type="button" className="btn btn-primary btn-next me-sm-3 me-1">Submit</button>
                            <button type="reset" className="btn btn-label-secondary">Cancel</button>
                          </div>
                        </div>
                      </div>
                      {/* COD */}
                      <div className="tab-pane fade" id="pills-cod" role="tabpanel" aria-labelledby="pills-cod-tab">
                        <p>Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance.</p>
                        <button type="button" className="btn btn-primary btn-next">Pay On Delivery</button>
                      </div>
                      {/* Gift card */}
                      <div className="tab-pane fade" id="pills-gift-card" role="tabpanel" aria-labelledby="pills-gift-card-tab">
                        <h6>Enter Gift Card Details</h6>
                        <div className="row g-3">
                          <div className="col-12">
                            <label htmlFor="giftCardNumber" className="form-label">Gift card number</label>
                            <input type="number" className="form-control" id="giftCardNumber" placeholder="Gift card number" />
                          </div>
                          <div className="col-12">
                            <label htmlFor="giftCardPin" className="form-label">Gift card pin</label>
                            <input type="number" className="form-control" id="giftCardPin" placeholder="Gift card pin" />
                          </div>
                          <div className="col-12">
                            <button type="button" className="btn btn-primary btn-next">Redeem Gift Card</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Address right */}
                <div className="col-xl-4 col-xxl-3">
                  <div className="border rounded p-4">
                    {/* Price Details */}
                    <h6>Price Details</h6>
                    <dl className="row">
                      <dt className="col-6 fw-normal text-heading">Order Total</dt>
                      <dd className="col-6 text-end">$1198.00</dd>
                      <dt className="col-6 fw-normal text-heading">Delivery Charges</dt>
                      <dd className="col-6 text-end"><s className="text-muted">$5.00</s> <span className="badge bg-label-success ms-1">Free</span></dd>
                    </dl>
                    <hr className="mx-n4" />
                    <dl className="row">
                      <dt className="col-6 text-heading mb-3">Total</dt>
                      <dd className="col-6 fw-medium text-end mb-0">$1198.00</dd>
                      <dt className="col-6 fw-normal text-heading">Deliver to:</dt>
                      <dd className="col-6 fw-medium text-end mb-0"><span className="badge bg-label-primary">Home</span></dd>
                    </dl>
                    {/* Address Details */}
                    <address className="text-heading">
                      <span> John Doe (Default),</span><br />
                      4135 Parkway Street, <br />
                      Los Angeles, CA, 90017. <br />
                      Mobile : +1 906 568 2332
                    </address>
                    <a href="javascript:void(0)">Change address</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Confirmation */}
            <div id="checkout-confirmation" className="content">
              <div className="row mb-3">
                <div className="col-12 col-lg-8 mx-auto text-center mb-3">
                  <h4 className="mt-2">Thank You! 😇</h4>
                  <p>Your order <a href="javascript:void(0)">#1536548131</a> has been placed!</p>
                  <p>We sent an email to <a href="mailto:john.doe@example.com">john.doe@example.com</a> with your order confirmation and receipt. If the email has not arrived within two minutes, please check your spam folder to see if the email was routed there.</p>
                  <p><span className="fw-medium"><i className="ti ti-clock me-1" /> Time placed:&nbsp;</span> 25/05/2020 13:35pm</p>
                </div>
                {/* Confirmation details */}
                <div className="col-12">
                  <ul className="list-group list-group-horizontal-md">
                    <li className="list-group-item flex-fill p-4 text-heading">
                      <h6 className="d-flex align-items-center gap-1"><i className="ti ti-map-pin" /> Shipping</h6>
                      <address className="mb-0">
                        John Doe <br />
                        4135 Parkway Street,<br />
                        Los Angeles, CA 90017,<br />
                        USA
                      </address>
                      <p className="mb-0 mt-3">
                        +123456789
                      </p>
                    </li>
                    <li className="list-group-item flex-fill p-4 text-heading">
                      <h6 className="d-flex align-items-center gap-1"><i className="ti ti-credit-card" /> Billing Address</h6>
                      <address className="mb-0">
                        John Doe <br />
                        4135 Parkway Street,<br />
                        Los Angeles, CA 90017,<br />
                        USA
                      </address>
                      <p className="mb-0 mt-3">
                        +123456789
                      </p>
                    </li>
                    <li className="list-group-item flex-fill p-4 text-heading">
                      <h6 className="d-flex align-items-center gap-1"><i className="ti ti-ship" /> Shipping Method</h6>
                      <p className="fw-medium mb-3">Preferred Method:</p>
                      Standard Delivery<br />
                      (Normally 3-4 business days)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                {/* Confirmation items */}
                <div className="col-xl-9 mb-3 mb-xl-0">
                  <ul className="list-group">
                    <li className="list-group-item p-4">
                      <div className="d-flex gap-3">
                        <div className="flex-shrink-0">
                          <img src="src/assets/images/products/1.png" alt="google home" className="w-px-75" />
                        </div>
                        <div className="flex-grow-1">
                          <div className="row">
                            <div className="col-md-8">
                              <a href="javascript:void(0)" className="text-body">
                                <p>Google - Google Home - White</p>
                              </a>
                              <div className="text-muted mb-1 d-flex flex-wrap"><span className="me-1">Sold by:</span> <a href="javascript:void(0)" className="me-3">Apple</a> <span className="badge bg-label-success">In Stock</span></div>
                            </div>
                            <div className="col-md-4">
                              <div className="text-md-end">
                                <div className="my-2 my-lg-4"><span className="text-primary">$299/</span><s className="text-muted">$359</s></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item p-4">
                      <div className="d-flex gap-3">
                        <div className="flex-shrink-0">
                          <img src="src/assets/images/products/2.png" alt="google home" className="w-px-75" />
                        </div>
                        <div className="flex-grow-1">
                          <div className="row">
                            <div className="col-md-8">
                              <a href="javascript:void(0)" className="text-body">
                                <p>Apple iPhone 11 (64GB, Black)</p>
                              </a>
                              <div className="text-muted mb-1 d-flex flex-wrap"><span className="me-1">Sold by:</span> <a href="javascript:void(0)" className="me-3">Apple</a> <span className="badge bg-label-success">In Stock</span></div>
                            </div>
                            <div className="col-md-4">
                              <div className="text-md-end">
                                <div className="my-2 my-lg-4"><span className="text-primary">$299/</span><s className="text-muted">$359</s></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Confirmation total */}
                <div className="col-xl-3">
                  <div className="border rounded p-4 pb-3">
                    {/* Price Details */}
                    <h6>Price Details</h6>
                    <dl className="row mb-0">
                      <dt className="col-6 fw-normal text-heading">Order Total</dt>
                      <dd className="col-6 text-end">$1198.00</dd>
                      <dt className="col-sm-6 text-heading fw-normal">Delivery Charges</dt>
                      <dd className="col-sm-6 text-end"><s className="text-muted">$5.00</s> <span className="badge bg-label-success ms-1">Free</span></dd>
                    </dl>
                    <hr className="mx-n4" />
                    <dl className="row mb-0">
                      <dt className="col-6 text-heading">Total</dt>
                      <dd className="col-6 fw-medium text-end text-heading mb-0">$1198.00</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/*/ Checkout Wizard */}
      {/* Add new address modal */}
      {/* Add New Address Modal */}
      <div className="modal fade" id="addNewAddress" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg modal-simple modal-add-new-address">
          <div className="modal-content p-3 p-md-5">
            <div className="modal-body">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              <div className="text-center mb-4">
                <h3 className="address-title mb-2">Add New Address</h3>
                <p className="text-muted address-subtitle">Add new address for express delivery</p>
              </div>
              <form id="addNewAddressForm" className="row g-3" onSubmit="return false">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md mb-md-0 mb-3">
                      <div className="form-check custom-option custom-option-icon">
                        <label className="form-check-label custom-option-content" htmlFor="customRadioHome">
                          <span className="custom-option-body">
                            <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24.25 33.75V23.75H16.75V33.75H6.75002V18.0469C6.7491 17.8733 6.78481 17.7015 6.85482 17.5426C6.92482 17.3838 7.02754 17.2415 7.15627 17.125L19.6563 5.76562C19.8841 5.5559 20.1825 5.43948 20.4922 5.43948C20.8019 5.43948 21.1003 5.5559 21.3281 5.76562L33.8438 17.125C33.9696 17.2438 34.0703 17.3866 34.1401 17.5449C34.2098 17.7032 34.2472 17.8739 34.25 18.0469V33.75H24.25Z" fill="currentColor" opacity="0.2" />
                              <path d="M33.25 33.75C33.25 34.3023 33.6977 34.75 34.25 34.75C34.8023 34.75 35.25 34.3023 35.25 33.75H33.25ZM34.25 18.0469H35.25C35.25 18.0415 35.25 18.0361 35.2499 18.0307L34.25 18.0469ZM33.8437 17.125L34.5304 16.398C34.5256 16.3934 34.5207 16.389 34.5158 16.3845L33.8437 17.125ZM21.3281 5.76562L20.6509 6.50143L20.656 6.50611L21.3281 5.76562ZM19.6562 5.76562L20.3288 6.5057L20.3335 6.50141L19.6562 5.76562ZM7.15625 17.125L7.82712 17.8666L7.82878 17.8651L7.15625 17.125ZM6.75 18.0469H7.75001L7.74999 18.0416L6.75 18.0469ZM5.75 33.75C5.75 34.3023 6.19772 34.75 6.75 34.75C7.30228 34.75 7.75 34.3023 7.75 33.75H5.75ZM3 32.75C2.44772 32.75 2 33.1977 2 33.75C2 34.3023 2.44772 34.75 3 34.75V32.75ZM38 34.75C38.5523 34.75 39 34.3023 39 33.75C39 33.1977 38.5523 32.75 38 32.75V34.75ZM23.25 33.75C23.25 34.3023 23.6977 34.75 24.25 34.75C24.8023 34.75 25.25 34.3023 25.25 33.75H23.25ZM15.75 33.75C15.75 34.3023 16.1977 34.75 16.75 34.75C17.3023 34.75 17.75 34.3023 17.75 33.75H15.75ZM35.25 33.75V18.0469H33.25V33.75H35.25ZM35.2499 18.0307C35.2449 17.7243 35.1787 17.422 35.0551 17.1416L33.225 17.9481C33.2409 17.9844 33.2495 18.0235 33.2501 18.0631L35.2499 18.0307ZM35.0551 17.1416C34.9316 16.8612 34.7531 16.6084 34.5304 16.398L33.1571 17.852C33.1859 17.8792 33.209 17.9119 33.225 17.9481L35.0551 17.1416ZM34.5158 16.3845L22.0002 5.02514L20.656 6.50611L33.1717 17.8655L34.5158 16.3845ZM22.0053 5.02984C21.5929 4.6502 21.0528 4.43948 20.4922 4.43948V6.43948C20.551 6.43948 20.6076 6.46159 20.6509 6.50141L22.0053 5.02984ZM20.4922 4.43948C19.9316 4.43948 19.3915 4.6502 18.979 5.02984L20.3335 6.50141C20.3767 6.46159 20.4334 6.43948 20.4922 6.43948V4.43948ZM18.9837 5.02556L6.48371 16.3849L7.82878 17.8651L20.3288 6.50569L18.9837 5.02556ZM6.48538 16.3834C6.25236 16.5942 6.06642 16.8518 5.93971 17.1393L7.76988 17.9459C7.78318 17.9157 7.80268 17.8887 7.82712 17.8666L6.48538 16.3834ZM5.93971 17.1393C5.813 17.4269 5.74836 17.7379 5.75001 18.0521L7.74999 18.0416C7.74981 18.0087 7.75659 17.976 7.76988 17.9459L5.93971 17.1393ZM5.75 18.0469V33.75H7.75V18.0469H5.75ZM3 34.75H38V32.75H3V34.75ZM25.25 33.75V25H23.25V33.75H25.25ZM25.25 25C25.25 24.4033 25.013 23.831 24.591 23.409L23.1768 24.8232C23.2237 24.8701 23.25 24.9337 23.25 25H25.25ZM24.591 23.409C24.169 22.987 23.5967 22.75 23 22.75V24.75C23.0663 24.75 23.1299 24.7763 23.1768 24.8232L24.591 23.409ZM23 22.75H18V24.75H23V22.75ZM18 22.75C17.4033 22.75 16.831 22.9871 16.409 23.409L17.8232 24.8232C17.8701 24.7763 17.9337 24.75 18 24.75V22.75ZM16.409 23.409C15.9871 23.831 15.75 24.4033 15.75 25H17.75C17.75 24.9337 17.7763 24.8701 17.8232 24.8232L16.409 23.409ZM15.75 25V33.75H17.75V25H15.75Z" fill="currentColor" />
                            </svg>
                            <span className="custom-option-title">Home</span>
                            <small> Delivery time (9am – 9pm) </small>
                          </span>
                          <input name="customRadioIcon" className="form-check-input" type="radio" defaultValue id="customRadioHome" defaultChecked />
                        </label>
                      </div>
                    </div>
                    <div className="col-md mb-md-0 mb-3">
                      <div className="form-check custom-option custom-option-icon">
                        <label className="form-check-label custom-option-content" htmlFor="customRadioOffice">
                          <span className="custom-option-body">
                            <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.75 33.75V6.25C22.75 5.91848 22.6183 5.60054 22.3839 5.36612C22.1495 5.1317 21.8315 5 21.5 5H6.5C6.16848 5 5.85054 5.1317 5.61612 5.36612C5.3817 5.60054 5.25 5.91848 5.25 6.25V33.75" fill="currentColor" fillOpacity="0.2" />
                              <path d="M2.75 32.75C2.19772 32.75 1.75 33.1977 1.75 33.75C1.75 34.3023 2.19772 34.75 2.75 34.75V32.75ZM37.75 34.75C38.3023 34.75 38.75 34.3023 38.75 33.75C38.75 33.1977 38.3023 32.75 37.75 32.75V34.75ZM21.75 33.75C21.75 34.3023 22.1977 34.75 22.75 34.75C23.3023 34.75 23.75 34.3023 23.75 33.75H21.75ZM21.5 5V4V5ZM5.25 6.25H4.25H5.25ZM4.25 33.75C4.25 34.3023 4.69772 34.75 5.25 34.75C5.80228 34.75 6.25 34.3023 6.25 33.75H4.25ZM34.25 33.75C34.25 34.3023 34.6977 34.75 35.25 34.75C35.8023 34.75 36.25 34.3023 36.25 33.75H34.25ZM22.75 14C22.1977 14 21.75 14.4477 21.75 15C21.75 15.5523 22.1977 16 22.75 16V14ZM10.25 10.25C9.69772 10.25 9.25 10.6977 9.25 11.25C9.25 11.8023 9.69772 12.25 10.25 12.25V10.25ZM15.25 12.25C15.8023 12.25 16.25 11.8023 16.25 11.25C16.25 10.6977 15.8023 10.25 15.25 10.25V12.25ZM12.75 20.25C12.1977 20.25 11.75 20.6977 11.75 21.25C11.75 21.8023 12.1977 22.25 12.75 22.25V20.25ZM17.75 22.25C18.3023 22.25 18.75 21.8023 18.75 21.25C18.75 20.6977 18.3023 20.25 17.75 20.25V22.25ZM10.25 26.5C9.69772 26.5 9.25 26.9477 9.25 27.5C9.25 28.0523 9.69772 28.5 10.25 28.5V26.5ZM15.25 28.5C15.8023 28.5 16.25 28.0523 16.25 27.5C16.25 26.9477 15.8023 26.5 15.25 26.5V28.5ZM27.75 26.5C27.1977 26.5 26.75 26.9477 26.75 27.5C26.75 28.0523 27.1977 28.5 27.75 28.5V26.5ZM30.25 28.5C30.8023 28.5 31.25 28.0523 31.25 27.5C31.25 26.9477 30.8023 26.5 30.25 26.5V28.5ZM27.75 20.25C27.1977 20.25 26.75 20.6977 26.75 21.25C26.75 21.8023 27.1977 22.25 27.75 22.25V20.25ZM30.25 22.25C30.8023 22.25 31.25 21.8023 31.25 21.25C31.25 20.6977 30.8023 20.25 30.25 20.25V22.25ZM2.75 34.75H37.75V32.75H2.75V34.75ZM23.75 33.75V6.25H21.75V33.75H23.75ZM23.75 6.25C23.75 5.65326 23.5129 5.08097 23.091 4.65901L21.6768 6.07322C21.7237 6.12011 21.75 6.18369 21.75 6.25H23.75ZM23.091 4.65901C22.669 4.23705 22.0967 4 21.5 4V6C21.5663 6 21.6299 6.02634 21.6768 6.07322L23.091 4.65901ZM21.5 4H6.5V6H21.5V4ZM6.5 4C5.90326 4 5.33097 4.23705 4.90901 4.65901L6.32322 6.07322C6.37011 6.02634 6.4337 6 6.5 6V4ZM4.90901 4.65901C4.48705 5.08097 4.25 5.65326 4.25 6.25H6.25C6.25 6.1837 6.27634 6.12011 6.32322 6.07322L4.90901 4.65901ZM4.25 6.25V33.75H6.25V6.25H4.25ZM36.25 33.75V16.25H34.25V33.75H36.25ZM36.25 16.25C36.25 15.6533 36.013 15.081 35.591 14.659L34.1768 16.0732C34.2237 16.1201 34.25 16.1837 34.25 16.25H36.25ZM35.591 14.659C35.169 14.2371 34.5967 14 34 14V16C34.0663 16 34.1299 16.0263 34.1768 16.0732L35.591 14.659ZM34 14H22.75V16H34V14ZM10.25 12.25H15.25V10.25H10.25V12.25ZM12.75 22.25H17.75V20.25H12.75V22.25ZM10.25 28.5H15.25V26.5H10.25V28.5ZM27.75 28.5H30.25V26.5H27.75V28.5ZM27.75 22.25H30.25V20.25H27.75V22.25Z" fill="currentColor" />
                            </svg>
                            <span className="custom-option-title"> Office </span>
                            <small> Delivery time (9am – 5pm) </small>
                          </span>
                          <input name="customRadioIcon" className="form-check-input" type="radio" defaultValue id="customRadioOffice" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressFirstName">First Name</label>
                  <input type="text" id="modalAddressFirstName" name="modalAddressFirstName" className="form-control" placeholder="John" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressLastName">Last Name</label>
                  <input type="text" id="modalAddressLastName" name="modalAddressLastName" className="form-control" placeholder="Doe" />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="modalAddressCountry">Country</label>
                  <select id="modalAddressCountry" name="modalAddressCountry" className="select2 form-select" data-allow-clear="true">
                    <option value>Select</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
                <div className="col-12 ">
                  <label className="form-label" htmlFor="modalAddressAddress1">Address Line 1</label>
                  <input type="text" id="modalAddressAddress1" name="modalAddressAddress1" className="form-control" placeholder="12, Business Park" />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="modalAddressAddress2">Address Line 2</label>
                  <input type="text" id="modalAddressAddress2" name="modalAddressAddress2" className="form-control" placeholder="Mall Road" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressLandmark">Landmark</label>
                  <input type="text" id="modalAddressLandmark" name="modalAddressLandmark" className="form-control" placeholder="Nr. Hard Rock Cafe" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressCity">City</label>
                  <input type="text" id="modalAddressCity" name="modalAddressCity" className="form-control" placeholder="Los Angeles" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressLandmark">State</label>
                  <input type="text" id="modalAddressState" name="modalAddressState" className="form-control" placeholder="California" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalAddressZipCode">Zip Code</label>
                  <input type="text" id="modalAddressZipCode" name="modalAddressZipCode" className="form-control" placeholder={99950} />
                </div>
                <div className="col-12">
                  <label className="switch">
                    <input type="checkbox" className="switch-input" />
                    <span className="switch-toggle-slider">
                      <span className="switch-on" />
                      <span className="switch-off" />
                    </span>
                    <span className="switch-label">Use as a billing address?</span>
                  </label>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary me-sm-3 me-1">Submit</button>
                  <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*/ Add New Address Modal */}
    </div>
  </section>

</div>

  );
}

export default Cart