import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faCheckCircle,
  faClock,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../assets/js/email-decode.min.js";
import "../../assets/js/jquery.min.js";
import "../../assets/js/popper.min.js";
import "../../assets/js/bootstrap.min.js";
import "../../assets/js/bootstrap-dropdown-ml-hack.js";
import "../../assets/js/slick.min.js";
import "../../assets/js/magnific-popup.min.js";
import "../../assets/js/nice-select.min.js";
import "../../assets/js/jquery-ui.js";
import "../../assets/js/vanilla-calendar.min.js";
import "../../assets/js/countdown.js";
import "../../assets/js/main.js";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Services - Petpia – Pet Care Service Template</title>
        <link
          rel="shortcut icon"
          href="src/assets/images/logo/favourite_icon.png"
        />
        <link rel="stylesheet" href="src/assets/css/all.css" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TSZFRP5V2X"
        ></script>
      </div>

      <div className="body_wrap">
        <div className="backtotop">
          <a href="#" className="scroll">
            <FontAwesomeIcon icon={faArrowUp} />{" "}
          </a>
        </div>
        <main>
          <section className="breadcrumb_section">
            <div className="container">
              <div className="row">
                <div className="col col-lg-4 col-md-7 col-sm-9">
                  <ul className="breadcrumb_nav">
                    <li>
                      <Link to="/Homepage">Home</Link>
                    </li>
                    <li>Service</li>
                  </ul>
                  <h1 className="page_title">Our Services</h1>
                  <p className="page_description mb-0">
                    Blandit cursus risus at ultrices. Enim sit amet venenatis
                    urna cursus eget nunc scelerisque
                  </p>
                </div>
              </div>
            </div>
            <div className="breadcrumb_img dog_image">
              <img
                src="src/assets/images/breadcrumb/breadcrumb_img_2.png"
                alt="Pet Care Service"
              />
            </div>
          </section>
          <section
            className="service_section section_space_lg"
            style={{
              backgroundImage:
                'url("src/assets/images/overlay/shapes_overlay_6.svg")',
            }}
          >
            <div className="container">
              <div className="section_title text-center">
                <h2 className="title_text mb-0">
                  <span className="sub_title">Our Services</span> All Pet Care
                  Services
                </h2>
              </div>
              <div className="row justify-content-center">
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("src/assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="src/assets/images/icon/icon_pet_walking.svg"
                          alt="Pet Walking"
                        />
                      </div>
                      <h3 className="item_title mb-0">Walking &amp; Sitting</h3>
                    </div>
                    <p>
                      Ut tortor pretium viverra suspendisse potenti nullam ac
                      tortor vitae eget dolor morbi
                    </p>
                    <div className="item_price">
                      <span>From $15 / hour</span>
                    </div>
                    <Link className="btn_unfill" to="/service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="decoration_image">
                      <img
                        src="src/assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("src/assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="src/assets/images/icon/icon_pet_grooming.svg"
                          alt="Pet Grooming"
                        />
                      </div>
                      <h3 className="item_title mb-0">Pet Grooming</h3>
                    </div>
                    <p>
                      Et odio pellentesque diam volutpat commodo sed egestas
                      egestas pellentesque nec nam
                    </p>
                    <div className="item_price">
                      <span>From $39 / complex</span>
                    </div>
                    <Link className="btn_unfill" to="/service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="decoration_image">
                      <img
                        src="src/assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("src/assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="src/assets/images/icon/icon_pet_training.svg"
                          alt="Pet Training"
                        />
                      </div>
                      <h3 className="item_title mb-0">Pet Training</h3>
                    </div>
                    <p>
                      Aliquam ut porttitor leo a diam sollicitudin tempor sit
                      amet est placerat
                    </p>
                    <div className="item_price">
                      <span>From $27 / hour</span>
                    </div>
                    <Link className="btn_unfill" to="/service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="decoration_image">
                      <img
                        src="src/assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("src/assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="src/assets/images/icon/icon_pet_taxi.svg"
                          alt="Pet Taxi"
                        />
                      </div>
                      <h3 className="item_title mb-0">Pet Taxi</h3>
                    </div>
                    <p>
                      Maecenas ultricies mi eget mauris pharetra et ultrices
                      consectetur adipiscing elit
                    </p>
                    <div className="item_price">
                      <span>From $22 / trip</span>
                    </div>
                    <Link className="btn_unfill" to="/service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="decoration_image">
                      <img
                        src="src/assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("src/assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="src/assets/images/icon/icon_pet_health.svg"
                          alt="Pet Health & Wellness"
                        />
                      </div>
                      <h3 className="item_title mb-0">Health &amp; Wellness</h3>
                    </div>
                    <p>
                      Amet porttitor eget dolor morbi non arcu risus quis varius
                      blandit aliquam etiam
                    </p>
                    <div className="item_price">
                      <span>From $39/ visit</span>
                    </div>
                    <Link className="btn_unfill" to="/service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="decoration_image">
                      <img
                        src="src/assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div
                    className="service_item"
                    style={{
                      backgroundImage:
                        'url("src/assets/images/shape/shape_path_1.svg")',
                    }}
                  >
                    <div className="title_wrap">
                      <div className="item_icon">
                        <img
                          src="src/assets/images/icon/icon_pet_hotel.svg"
                          alt="Pet Hotel"
                        />
                      </div>
                      <h3 className="item_title mb-0">Pet Hotel</h3>
                    </div>
                    <p>
                      Turpis massa sed elementum tempus egestas sed sed risus
                      aliquam urna cursus eget n
                    </p>
                    <div className="item_price">
                      <span>From $15 / night</span>
                    </div>
                    <Link className="btn_unfill" to="/service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="decoration_image">
                      <img
                        src="src/assets/images/shape/shape_paws.svg"
                        alt="Pet Paws"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="feature_service decoration_wrap"
            style={{
              backgroundImage:
                'url("src/assets/images/background/shape_bg_2.png")',
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-lg-5">
                  <div className="feature_image">
                    <div className="image_wrap">
                      <img
                        src="src/assets/images/feature/feature_img_1.jpg"
                        alt="Pet Grooming Service Image"
                      />
                    </div>
                    <div className="shape_image_1">
                      <img
                        src="src/assets/images/shape/shape_butterfly.svg"
                        alt="Butterfly Shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="feature_content">
                    <h2 className="item_title">Pet Grooming Service</h2>
                    <ul className="icon_list unorder_list_block">
                      <li>
                        <FontAwesomeIcon icon={faCheckCircle} />{" "}
                        <span>Bathing – wash and fluff dry</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCheckCircle} />{" "}
                        <span>Pawdicure – nail trimming and filing</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCheckCircle} />{" "}
                        <span>
                          Breed specific styling, cutting and stripping
                        </span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCheckCircle} />{" "}
                        <span>De-matting and detangling</span>
                      </li>
                    </ul>
                    <Link className="btn btn_primary" to="/service_details">
                      <FontAwesomeIcon icon={faPaw} /> Get Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration_item shape_image_2">
              <img
                src="src/assets/images/shape/shape_group_1.svg"
                alt="Pet Tools Box"
              />
            </div>
            <div className="decoration_item decoration_image_1">
              <img
                src="src/assets/images/feature/feature_img_2.jpg"
                alt="Pet Grooming Service Image"
              />
            </div>
            <div className="decoration_item decoration_image_2">
              <img
                src="src/assets/images/feature/feature_img_3.jpg"
                alt="Pet Grooming Service Image"
              />
            </div>
          </section>
          <section
            className="service_section section_space_lg"
            style={{
              backgroundImage:
                'url("src/assets/images/overlay/shapes_overlay_6.svg")',
            }}
          >
            <div className="container">
              <div className="section_title text-center">
                <div className="row justify-content-center">
                  <div className="col col-lg-5">
                    <h2 className="title_text">
                      <span className="sub_title">Our Prices</span> Pet Services
                      + Rates
                    </h2>
                    <p className="mb-0">
                      We can fully customize your pet sitting schedule to fit
                      your pet’s needs. Pick and choose what visits work best
                      for you and your family
                    </p>
                  </div>
                </div>
              </div>
              <div className="services_price_tab">
                <ul className="nav tabs_nav unorder_list_center" role="tablist">
                  <li role="presentation">
                    <button
                      className="active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_walking_sitting"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Walking &amp; Sitting
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab_training"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Training
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab_pet_taxi"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Pet Taxi
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#tab_pet_hotel"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Pet Hotel
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab_walking_sitting"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_1.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  15 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_2.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  30 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_3.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  45 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_4.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  29 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_5.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  65 Overnight Pet Sitting
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_6.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  40 Private Boarding
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab_training"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_1.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  15 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_2.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  30 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_3.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  45 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_4.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  29 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_5.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  65 Overnight Pet Sitting
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_6.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  40 Private Boarding
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab_pet_taxi"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_1.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  15 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_2.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  30 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_3.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  45 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_4.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  29 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_5.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  65 Overnight Pet Sitting
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_6.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  40 Private Boarding
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab_pet_hotel"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_1.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  15 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_2.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  30 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_3.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  45 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <div className="services_price_items_wrap">
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_4.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  29 minute visit
                                </div>
                                <div className="item_price">
                                  <span>$22.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                1 x Visit per day, small pet visit can be added
                                per quote
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_5.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  65 Overnight Pet Sitting
                                </div>
                                <div className="item_price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                A 12-hour stay, including the evening visit and
                                morning visit
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                          <div className="service_price_item">
                            <div className="item_image">
                              <img
                                src="src/assets/images/service/service_img_6.jpg"
                                alt="Pet Care Service"
                              />
                            </div>
                            <div className="item_content">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="service_time">
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ color: "#8161f5" }}
                                  />{" "}
                                  40 Private Boarding
                                </div>
                                <div className="item_price">
                                  <span>$36.00</span>
                                </div>
                              </div>
                              <h3 className="item_title mb-0">
                                Drop-off and pick-up times are flexible. $10
                                each additional dog.
                              </h3>
                            </div>
                            <Link
                              className="item_global_link"
                              to="/service_details"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="team_section bg_gray section_space_lg">
            <div className="container">
              <div className="section_title text-center">
                <h2 className="title_text mb-0">
                  <span className="sub_title">Pet Care Team</span>
                  Welcome To Our Family
                </h2>
              </div>
              <div className="row justify-content-center">
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="team_item text-center">
                    <div className="item_image">
                      <img
                        src="src/assets/images/team/team_img_1.png"
                        alt="Team Image"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Ha Huy Hoang</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="https://www.facebook.com/2010.HaHuyHoanglacuaai.2003">
                          <FontAwesomeIcon icon={faFacebook} />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/hardy._.03">
                          <FontAwesomeIcon icon={faInstagram} />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="team_item text-center">
                    <div className="item_image">
                      <img
                        src="src/assets/images/team/team_img_2.png"
                        alt="Team Image"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Le Xuan Phuong Nam</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="https://www.facebook.com/namtheshy2mai">
                          <FontAwesomeIcon icon={faFacebook} />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/namle2330">
                          <FontAwesomeIcon icon={faInstagram} />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="team_item text-center">
                    <div className="item_image">
                      <img
                        src="src/assets/images/team/team_img_3.png"
                        alt="Team Image"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Nguyen Ba Minh Duc</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="https://www.facebook.com/profile.php?id=100024098480982">
                          <FontAwesomeIcon icon={faFacebook} />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                          <FontAwesomeIcon icon={faInstagram} />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="text-center">
                <Link className="btn btn_primary" to="/team">
                  <FontAwesomeIcon icon={faPaw} /> Our Team
                </Link>
              </div> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Service;
