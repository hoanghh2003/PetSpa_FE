import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faCircleCheck,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const [activeTab, setActiveTab] = useState("pills-cc");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckboxChange = (productId, petId) => {
    setProducts((prevStoredProducts) => {
      return prevStoredProducts.map((product) => {
        if (product.serviceId === productId && product.petId === petId) {
          return { ...product, selected: !product.selected };
        }
        return product;
      });
    });
  };

  // const handleCheckboxChange = (productId, petId) => {
  //   setProducts((prevStoredProducts) => {
  //     return prevStoredProducts.map((product) => {
  //       if (product.serviceId === productId && product.petId === petId) {
  //         return { ...product, selected: !product.selected };
  //       }
  //       return product;
  //     });
  //   });
  // };

  useEffect(() => {
    const storedProducts = getFromLocalStorage();

    if (storedProducts) {
      setProducts(
        storedProducts.map((product) => ({
          ...product,
          selected: true,
        }))
      );
    }
  }, []);

  function getFromLocalStorage() {
    const jsonData = localStorage.getItem("cart");
    return JSON.parse(jsonData);
  }

  async function handleBooking() {
    setIsLoading(true);
    const userInfoString = localStorage.getItem("user-info");
    const userInfo = JSON.parse(userInfoString);

    if (userInfo != null) {
      const token = userInfo.data.token;
      const userId = userInfo.data.user.id;

      if (userId != null) {
        const savedCart = localStorage.getItem("cart");
        const cart = savedCart ? JSON.parse(savedCart) : [];

        if (cart.length === 0) {
          setError("Your cart is empty.");
          setIsLoading(false);
          return;
        }

        const bookingPromises = cart.map((item) => {
          const requestData = {
            cusId: userId, // Customer ID
            bookingSchedule: item.data, // Assuming item.data is already formatted as "YYYY-MM-DDTHH:mm:ss"
            bookingDetails: [
              {
                petId: item.petId,
                serviceId: item.serviceId,
                comboId: item.comboId || null, // Replace with actual combo ID if available
                staffId: item.staffId || null, // Replace with actual staff ID if available
                status: true, // Change status if needed
                comboType: "string", // Replace with actual combo type if available
              },
            ],
          };

          return axios.post(`https://localhost:7150/api/Booking`, requestData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        });

        try {
          const responses = await Promise.all(bookingPromises);

          const successfulResponses = responses.filter(
            (response) => response.status === 200
          );

          if (successfulResponses.length === cart.length) {
            console.log("All bookings were successful.");
            localStorage.removeItem("cart");
            message.success("All bookings were successful!");

            // Redirect to home page after a delay
            setTimeout(() => {
              navigate("/");
            }, 1000); // Adjust delay as needed
          } else {
            console.log("Some bookings were not successful.");
            message.warning("Some bookings were not successful.");
          }
        } catch (error) {
          if (error.response) {
            if (error.response.status === 401) {
              console.log("Token expired. Please log in again.");
              message.error(error.response.data);
              setError("Token expired. Please log in again.");
            } else {
              console.error("Error response:", error.response.data);
              message.error(error.response.data || "An error occurred.");
              setError(error.response.data || "An error occurred.");
            }
          } else {
            console.error("Error:", error);

            setError("An unexpected error occurred.");
          }
        }
      }
    } else {
      message.error("User not logged in.");
    }

    setIsLoading(false);
  }

  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />
        <title>
          Checkout Card - Front Pages | Vuexy - Bootstrap Admin Template
        </title>
        <meta
          name="description"
          content="Start your development with a Dashboard for Bootstrap 5"
        />
        <meta
          name="keywords"
          content="dashboard, bootstrap 5 dashboard, bootstrap 5 design, bootstrap 5"
        />
        <link rel="canonical" href="https://1.envato.market/vuexy_admin" />
        <link
          rel="icon"
          type="image/x-icon"
          href="src/assets/images/favicon/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&ampdisplay=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/fonts/tabler-icons.css"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/css/rtl/core.css"
          className="template-customizer-core-css"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/css/rtl/theme-default.css"
          className="template-customizer-theme-css"
        />
        <link rel="stylesheet" href="src/assets/css/demo.css" />
        <link
          rel="stylesheet"
          href="src/assets/vendor/css/pages/front-page.css"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/libs/node-waves/node-waves.css"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/libs/select2/select2.css"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/libs/bs-stepper/bs-stepper.css"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/libs/rateyo/rateyo.css"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/libs/@form-validation/form-validation.css"
        />
        <link
          rel="stylesheet"
          href="src/assets/vendor/css/pages/wizard-ex-checkout.css"
        />

        <script src="src/assets/vendor/js/helpers.js"></script>
        <script src="src/assets/vendor/js/template-customizer.js"></script>
        <script src="src/assets/js/front-config.js"></script>
      </head>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DDHKGP"
            height="0"
            width="0"
            style="display: none; visibility: hidden"
          ></iframe>
        </noscript>
        <script src="src/assets/vendor/js/dropdown-hover.js"></script>
        <script src="src/assets/vendor/js/mega-dropdown.js"></script>

        <nav className="layout-navbar shadow-none py-0">
          <div className="container"></div>
        </nav>

        <section className="section-py bg-body first-section-pt">
          <div className="container">
            <div
              id="wizard-checkout"
              className="bs-stepper wizard-icons wizard-icons-example mb-5"
            >
              <div className="bs-stepper-header m-auto border-0 py-4">
                <div className="step" data-target="#checkout-cart">
                  <button
                    type="button"
                    className="step-trigger"
                    onClick={() => setCurrentStep(1)}
                  >
                    <span className="bs-stepper-icon">
                      <svg viewBox="0 0 58 54">
                        <FontAwesomeIcon icon={faCartShopping} />{" "}
                      </svg>
                    </span>
                    <span className="bs-stepper-label">Cart</span>
                  </button>
                </div>
                <div className="line">
                  <i className="ti ti-chevron-right"></i>
                </div>

                <div className="step" data-target="#checkout-payment">
                  <button
                    type="button"
                    className="step-trigger"
                    onClick={() => setCurrentStep(3)}
                  >
                    <span className="bs-stepper-icon">
                      <svg viewBox="0 0 58 54">
                        <FontAwesomeIcon icon={faMoneyCheckDollar} />{" "}
                      </svg>
                    </span>
                    <span className="bs-stepper-label">Payment</span>
                  </button>
                </div>
                <div className="line">
                  <i className="ti ti-chevron-right"></i>
                </div>
                <div className="step" data-target="#checkout-confirmation">
                  <button
                    type="button"
                    className="step-trigger"
                    onClick={() => setCurrentStep(4)}
                  >
                    <span className="bs-stepper-icon">
                      <svg viewBox="0 0 58 54">
                        <FontAwesomeIcon icon={faCircleCheck} />{" "}
                      </svg>
                    </span>
                    <span className="bs-stepper-label">Confirmation</span>
                  </button>
                </div>
              </div>
              <div className="bs-stepper-content border-top">
                <form
                  id="wizard-checkout-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {currentStep === 1 && (
                    <div id="checkout-cart" className="content">
                      <div className="row">
                        <div className="col-xl-8 mb-3 mb-xl-0">
                          <div
                            className="alert alert-success mb-3"
                            role="alert"
                          >
                            <div className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <i className="ti ti-bookmarks ti-sm alert-icon alert-icon-lg"></i>
                              </div>
                              <div className="flex-grow-1">
                                <div className="fw-medium fs-5 mb-2">
                                  Available Offers
                                </div>
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    {" "}
                                    - 10% Instant Discount on Bank of America
                                    Corp Bank Debit and Credit cards
                                  </li>
                                  <li>
                                    {" "}
                                    - 25% Cashback Voucher of up to $60 on first
                                    ever PayPal transaction. TCA
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn-close btn-pinned"
                              data-bs-dismiss="alert"
                              aria-label="Close"
                            ></button>
                          </div>

                          <h5>My Shopping Bag </h5>
                          <ul className="list-group mb-3">
                            {products.map((product, index) => (
                              <li key={index} className="list-group-item p-4">
                                <div className="d-flex gap-3">
                                  <div className="flex-shrink-0 d-flex align-items-center">
                                    <img
                                      src="src/assets/images/products/1.png"
                                      alt="google home"
                                      className="w-px-100"
                                    />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="row">
                                      <div className="col-md-8">
                                        <p className="me-3">
                                          <a
                                            href="javascript:void(0)"
                                            className="text-body"
                                          >
                                            {product.comboId
                                              ? `Combo: ${product.serviceName}`
                                              : `Service: ${product.serviceName}`}
                                          </a>
                                        </p>
                                        <div className="text-muted mb-2 d-flex flex-wrap">
                                          <span className="me-1">PetName:</span>
                                          <a
                                            href="javascript:void(0)"
                                            className="me-3"
                                          >
                                            {product.petName}
                                          </a>
                                        </div>
                                        <div className="text-muted mb-2 d-flex flex-wrap">
                                          <span className="me-1">Date:</span>
                                          <a
                                            href="javascript:void(0)"
                                            className="me-3"
                                          >
                                            {new Date(
                                              product.data
                                            ).toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                            })}
                                          </a>
                                        </div>
                                        <div className="text-muted mb-2 d-flex flex-wrap">
                                          <span className="me-1">Time:</span>
                                          <a
                                            href="javascript:void(0)"
                                            className="me-3"
                                          >
                                            {new Date(
                                              product.data
                                            ).toLocaleTimeString("en-US", {
                                              hour: "2-digit",
                                              minute: "2-digit",
                                            })}
                                          </a>
                                        </div>
                                        <div className="text-muted mb-2 d-flex flex-wrap">
                                          <span className="me-1">Period:</span>
                                          <a
                                            href="javascript:void(0)"
                                            className="me-3"
                                          >
                                            {new Date(
                                              product.data
                                            ).toLocaleTimeString("en-US", {
                                              hour: "2-digit",
                                              minute: "2-digit",
                                            })}
                                          </a>
                                        </div>
                                        <div
                                          className="read-only-ratings mb-3"
                                          data-rateyo-read-only="true"
                                        ></div>
                                        <input
                                          type="number"
                                          className="form-control form-control-sm w-px-100 mt-2"
                                          defaultValue="1"
                                          min="1"
                                          max="5"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <div className="text-md-end">
                                          <button
                                            type="button"
                                            className="btn-close btn-pinned"
                                            aria-label="Close"
                                          ></button>
                                          <div className="my-2 my-md-4 mb-md-5">
                                            <span className="text-primary">
                                              {product.servicePrice}
                                            </span>
                                            <s className="text-muted">$359</s>
                                          </div>
                                          <Checkbox
                                            checked={product.selected}
                                            onChange={() =>
                                              handleCheckboxChange(
                                                product.serviceId,
                                                product.petId
                                              )
                                            }
                                          ></Checkbox>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                            <li className="list-group-item p-4">
                              <div className="d-flex gap-3">
                                <div className="flex-shrink-0 d-flex align-items-center">
                                  <img
                                    src="src/assets/images/products/2.png"
                                    alt="google home"
                                    className="w-px-100"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div className="row">
                                    <div className="col-md-8">
                                      <p className="me-3">
                                        <a
                                          href="javascript:void(0)"
                                          className="text-body"
                                        >
                                          Apple iPhone 11 (64GB, Black)
                                        </a>
                                      </p>
                                      <div className="text-muted mb-2 d-flex flex-wrap">
                                        <span className="me-1">Sold by:</span>{" "}
                                        <a
                                          href="javascript:void(0)"
                                          className="me-3"
                                        >
                                          Apple
                                        </a>{" "}
                                        <span className="badge bg-label-success">
                                          In Stock
                                        </span>
                                      </div>
                                      <div
                                        className="read-only-ratings mb-3"
                                        data-rateyo-read-only="true"
                                      ></div>
                                      <input
                                        type="number"
                                        className="form-control form-control-sm w-px-100 mt-2"
                                        value="1"
                                        min="1"
                                        max="5"
                                      />
                                    </div>
                                    <div className="col-md-4">
                                      <div className="text-md-end">
                                        <button
                                          type="button"
                                          className="btn-close btn-pinned"
                                          aria-label="Close"
                                        ></button>
                                        <div className="my-2 my-md-4 mb-md-5">
                                          <span className="text-primary">
                                            $299/
                                          </span>
                                          <s className="text-muted">$359</s>
                                        </div>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-label-primary mt-md-3"
                                        >
                                          Move to wishlist
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>

                          <div className="list-group">
                            <a
                              href="javascript:void(0)"
                              className="list-group-item d-flex justify-content-between"
                            >
                              <span>Add more products from wishlist</span>
                              <i className="ti ti-sm ti-chevron-right scaleX-n1-rtl"></i>
                            </a>
                          </div>
                        </div>

                        <div className="col-xl-4">
                          <div className="border rounded p-4 mb-3 pb-3">
                            <h6>Offer</h6>
                            <div className="row g-3 mb-3">
                              <div className="col-8 col-xxl-8 col-xl-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Promo Code"
                                  aria-label="Enter Promo Code"
                                />
                              </div>
                              <div className="col-4 col-xxl-4 col-xl-12">
                                <div className="d-grid">
                                  <button
                                    type="button"
                                    className="btn btn-label-primary"
                                  >
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="bg-lighter rounded p-3">
                              <p className="fw-medium mb-2">
                                Buying gift for a loved one?
                              </p>
                              <p className="mb-2">
                                Gift wrap and personalized message on card, Only
                                for $2.
                              </p>
                              <a
                                href="javascript:void(0)"
                                className="fw-medium"
                              >
                                Add a gift wrap
                              </a>
                            </div>
                            <hr className="my-4" />

                            <div className="d-flex justify-content-between mb-2">
                              <span>Subtotal</span>
                              <span className="text-end">$598</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                              <span>Discount (10%)</span>
                              <span className="text-end">- $59.80</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                              <span>Delivery Charges</span>
                              <span className="text-end">$5.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span>Tax (12%)</span>
                              <span className="text-end">$64.80</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                              <span>Total</span>
                              <span className="fw-bold text-end">$608</span>
                            </div>
                            <div className="d-grid">
                              <button
                                type="button"
                                className="btn btn-primary btn-next"
                                onClick={handleNext}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div id="checkout-address" className="content">
                      <div className="row">
                        <div className="col-lg-8 mb-3">
                          <h5>Delivery Address</h5>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                              />
                            </div>
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Address Line 1"
                              />
                            </div>
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Address Line 2"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="State/Province"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="ZIP Code"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Country"
                              />
                            </div>
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                            <div className="col-12">
                              <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Order Notes"
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="d-grid">
                            <button
                              type="button"
                              className="btn btn-primary btn-next"
                              onClick={handleNext}
                            >
                              Next
                            </button>
                          </div>
                          <div className="d-grid mt-2">
                            <button
                              type="button"
                              className="btn btn-label-primary btn-prev"
                              onClick={handlePrev}
                            >
                              Previous
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div id="checkout-payment" className="content">
                      <div className="row">
                        {/* Payment left */}
                        <div className="col-xl-8 col-xxl-9 mb-3 mb-xl-0">
                          {/* Offer alert */}
                          <div className="alert alert-success" role="alert">
                            <div className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <i className="fas fa-bookmark alert-icon alert-icon-lg"></i>
                              </div>
                              <div className="flex-grow-1">
                                <div className="fw-medium mb-2">
                                  Bank Offers
                                </div>
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    - 10% Instant Discount on Bank of America
                                    Corp Bank Debit and Credit cards
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn-close btn-pinned"
                              data-bs-dismiss="alert"
                              aria-label="Close"
                            ></button>
                          </div>

                          {/* Payment Tabs */}
                          <div className="col-xxl-9 col-lg-8">
                            <ul
                              className="nav nav-pills card-header-pills mb-3"
                              id="paymentTabs"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <button
                                  className={`nav-link ${
                                    activeTab === "pills-cc" ? "active" : ""
                                  }`}
                                  id="pills-cc-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-cc"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-cc"
                                  aria-selected={activeTab === "pills-cc"}
                                  onClick={() => handleTabChange("pills-cc")}
                                >
                                  Card
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className={`nav-link ${
                                    activeTab === "pills-cod" ? "active" : ""
                                  }`}
                                  id="pills-cod-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-cod"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-cod"
                                  aria-selected={activeTab === "pills-cod"}
                                  onClick={() => handleTabChange("pills-cod")}
                                >
                                  Cash On Delivery
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className={`nav-link ${
                                    activeTab === "pills-gift-card"
                                      ? "active"
                                      : ""
                                  }`}
                                  id="pills-gift-card-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-gift-card"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-gift-card"
                                  aria-selected={
                                    activeTab === "pills-gift-card"
                                  }
                                  onClick={() =>
                                    handleTabChange("pills-gift-card")
                                  }
                                >
                                  Gift Card
                                </button>
                              </li>
                            </ul>
                            <div
                              className="tab-content px-0"
                              id="paymentTabsContent"
                            >
                              {/* Credit card */}
                              <div
                                className={`tab-pane fade ${
                                  activeTab === "pills-cc" ? "show active" : ""
                                }`}
                                id="pills-cc"
                                role="tabpanel"
                                aria-labelledby="pills-cc-tab"
                              >
                                <div className="row g-3">
                                  <div className="col-12">
                                    <label
                                      className="form-label w-100"
                                      htmlFor="paymentCard"
                                    >
                                      Card Number
                                    </label>
                                    <div className="input-group input-group-merge">
                                      <input
                                        id="paymentCard"
                                        name="paymentCard"
                                        className="form-control credit-card-mask"
                                        type="text"
                                        placeholder="1356 3215 6548 7898"
                                        aria-describedby="paymentCard2"
                                      />
                                      <span
                                        className="input-group-text cursor-pointer p-1"
                                        id="paymentCard2"
                                      >
                                        <span className="card-type"></span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-12 col-md-6">
                                    <label
                                      className="form-label"
                                      htmlFor="paymentCardName"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      id="paymentCardName"
                                      className="form-control"
                                      placeholder="John Doe"
                                    />
                                  </div>
                                  <div className="col-6 col-md-3">
                                    <label
                                      className="form-label"
                                      htmlFor="paymentCardExpiryDate"
                                    >
                                      Exp. Date
                                    </label>
                                    <input
                                      type="text"
                                      id="paymentCardExpiryDate"
                                      className="form-control expiry-date-mask"
                                      placeholder="MM/YY"
                                    />
                                  </div>
                                  <div className="col-6 col-md-3">
                                    <label
                                      className="form-label"
                                      htmlFor="paymentCardCvv"
                                    >
                                      CVV Code
                                    </label>
                                    <div className="input-group input-group-merge">
                                      <input
                                        type="text"
                                        id="paymentCardCvv"
                                        className="form-control cvv-code-mask"
                                        maxLength="3"
                                        placeholder="654"
                                      />
                                      <span
                                        className="input-group-text cursor-pointer"
                                        id="paymentCardCvv2"
                                      >
                                        <i
                                          className="fas fa-question-circle text-muted"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          title="Card Verification Value"
                                        ></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <label className="switch">
                                      <input
                                        type="checkbox"
                                        className="switch-input"
                                      />
                                      <span className="switch-toggle-slider">
                                        <span className="switch-on"></span>
                                        <span className="switch-off"></span>
                                      </span>
                                      <span className="switch-label">
                                        Save card for future billing?
                                      </span>
                                    </label>
                                  </div>
                                  <div className="col-12">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-next me-sm-3 me-1"
                                    >
                                      Submit
                                    </button>
                                    <button
                                      type="reset"
                                      className="btn btn-secondary"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </div>

                              {/* COD */}
                              <div
                                className={`tab-pane fade ${
                                  activeTab === "pills-cod" ? "show active" : ""
                                }`}
                                id="pills-cod"
                                role="tabpanel"
                                aria-labelledby="pills-cod-tab"
                              >
                                <p>
                                  Cash on Delivery is a type of payment method
                                  where the recipient makes payment for the
                                  order at the time of delivery rather than in
                                  advance.
                                </p>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-next"
                                >
                                  Pay On Delivery
                                </button>
                              </div>

                              {/* Gift card */}
                              <div
                                className={`tab-pane fade ${
                                  activeTab === "pills-gift-card"
                                    ? "show active"
                                    : ""
                                }`}
                                id="pills-gift-card"
                                role="tabpanel"
                                aria-labelledby="pills-gift-card-tab"
                              >
                                <h6>Enter Gift Card Details</h6>
                                <div className="row g-3">
                                  <div className="col-12">
                                    <label
                                      htmlFor="giftCardNumber"
                                      className="form-label"
                                    >
                                      Gift card number
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="giftCardNumber"
                                      placeholder="Gift card number"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="giftCardPin"
                                      className="form-label"
                                    >
                                      Gift card pin
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="giftCardPin"
                                      placeholder="Gift card pin"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-next"
                                    >
                                      Redeem Gift Card
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStep === 4 && (
                    <div className="bs-stepper-content border-top">
                      <form
                        id="wizard-checkout-form"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        {currentStep === 4 && (
                          <div id="checkout-confirmation" className="content">
                            <div className="row mb-3">
                              <div className="col-12 col-lg-8 mx-auto text-center mb-3">
                                <h4 className="mt-2">Thank You! 😇</h4>
                                <p>
                                  Your order{" "}
                                  <a href="javascript:void(0)">#1536548131</a>{" "}
                                  has been placed!
                                </p>
                                <p>
                                  We sent an email to{" "}
                                  <a href="mailto:john.doe@example.com">
                                    john.doe@example.com
                                  </a>{" "}
                                  with your order confirmation and receipt. If
                                  the email hasnt arrived within two minutes,
                                  please check your spam folder to see if the
                                  email was routed there.
                                </p>
                                <p>
                                  <span className="fw-medium">
                                    <FontAwesomeIcon icon={faClock} /> Time
                                    placed:&nbsp;
                                  </span>{" "}
                                  25/05/2020 13:35pm
                                </p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xl-9 mb-3 mb-xl-0">
                                <ul className="list-group">
                                  <li className="list-group-item p-4">
                                    <div className="d-flex gap-3">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="src/assets/images/products/1.png"
                                          alt="google home"
                                          className="w-px-75"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        <div className="row">
                                          <div className="col-md-8">
                                            <a
                                              href="javascript:void(0)"
                                              className="text-body"
                                            >
                                              <p>
                                                Google - Google Home - White
                                              </p>
                                            </a>
                                            <div className="text-muted mb-1 d-flex flex-wrap">
                                              <span className="me-1">
                                                Sold by:
                                              </span>
                                              <a
                                                href="javascript:void(0)"
                                                className="me-3"
                                              >
                                                Apple
                                              </a>
                                              <span className="badge bg-label-success">
                                                In Stock
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <div className="text-md-end">
                                              <div className="my-2 my-lg-4">
                                                <span className="text-primary">
                                                  $299/
                                                </span>
                                                <s className="text-muted">
                                                  $359
                                                </s>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="list-group-item p-4">
                                    <div className="d-flex gap-3">
                                      <div className="flex-shrink-0">
                                        <img
                                          src="src/assets/images/products/2.png"
                                          alt="google home"
                                          className="w-px-75"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        <div className="row">
                                          <div className="col-md-8">
                                            <a
                                              href="javascript:void(0)"
                                              className="text-body"
                                            >
                                              <p>
                                                Apple iPhone 11 (64GB, Black)
                                              </p>
                                            </a>
                                            <div className="text-muted mb-1 d-flex flex-wrap">
                                              <span className="me-1">
                                                Sold by:
                                              </span>
                                              <a
                                                href="javascript:void(0)"
                                                className="me-3"
                                              >
                                                Apple
                                              </a>
                                              <span className="badge bg-label-success">
                                                In Stock
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-md-4">
                                            <div className="text-md-end">
                                              <div className="my-2 my-lg-4">
                                                <span className="text-primary">
                                                  $299/
                                                </span>
                                                <s className="text-muted">
                                                  $359
                                                </s>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-xl-3">
                                <div className="border rounded p-4 pb-3">
                                  <h6>Price Details</h6>
                                  <dl className="row mb-0">
                                    <dt className="col-6 fw-normal text-heading">
                                      Order Total
                                    </dt>
                                    <dd className="col-6 text-end">$1198.00</dd>

                                    <dt className="col-sm-6 text-heading fw-normal">
                                      Delivery Charges
                                    </dt>
                                    <dd className="col-sm-6 text-end">
                                      <s className="text-muted">$5.00</s>
                                      <span className="badge bg-label-success ms-1">
                                        Free
                                      </span>
                                    </dd>
                                  </dl>
                                  <hr className="mx-n4" />
                                  <dl className="row mb-0">
                                    <dt className="col-6 text-heading">
                                      Total
                                    </dt>
                                    <dd className="col-6 fw-medium text-end text-heading mb-0">
                                      $1198.00
                                    </dd>
                                  </dl>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </form>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Cart;
