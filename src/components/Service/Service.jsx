import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
            <i className="far fa-arrow-up" />
          </a>
        </div>
        <main>
          <section className="breadcrumb_section">
            <div className="container">
              <div className="row">
                <div className="col col-lg-4 col-md-7 col-sm-9">
                  <ul className="breadcrumb_nav">
                    <li>
                      <a href="Homepage">Home</a>
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
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
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
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
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
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
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
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
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
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
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
                    <a className="btn_unfill" href="service_details">
                      <span>Get Service</span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
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
              backgroundImage: 'url("src/assets/images/background/shape_bg_2.png")',
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
                        <i className="fas fa-check-circle" />{" "}
                        <span>Bathing – wash and fluff dry</span>
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />{" "}
                        <span>Pawdicure – nail trimming and filing</span>
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />{" "}
                        <span>
                          Breed specific styling, cutting and stripping
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />{" "}
                        <span>De-matting and detangling</span>
                      </li>
                    </ul>
                    <a className="btn btn_primary" href="service_details">
                    <FontAwesomeIcon icon={faPaw} />{" "} Get Service
                    </a>
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
                                  <i className="fas fa-clock" /> 15 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 30 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 45 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 29 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 65 Overnight
                                  Pet Sitting
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 40 Private
                                  Boarding
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 15 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 30 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 45 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 29 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 65 Overnight
                                  Pet Sitting
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 40 Private
                                  Boarding
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 15 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 30 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 45 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 29 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 65 Overnight
                                  Pet Sitting
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 40 Private
                                  Boarding
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 15 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 30 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 45 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 29 minute visit
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 65 Overnight
                                  Pet Sitting
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
                                  <i className="fas fa-clock" /> 40 Private
                                  Boarding
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
                            <a
                              className="item_global_link"
                              href="service_details"
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
          <section
            className="team_section bg_gray section_space_lg"
            style={{
              backgroundImage: 'url("src/assets/images/shape/shape_paws_bg_2.svg")',
            }}
          >
            <div className="container">
              <div className="section_title text-center">
                <h2 className="title_text mb-0">
                  <span className="sub_title">Pet Care Team</span> Welcome To
                  Our Family
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
                      <h3 className="item_title">Cameron Rogers</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter" />
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
                      <h3 className="item_title">Irene Sotelo</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter" />
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
                      <h3 className="item_title">Cameron Rogers</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter" />
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
                        src="src/assets/images/team/team_img_4.png"
                        alt="Team Image"
                      />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Tiontay Carroll</h3>
                      <span className="item_designation">
                        President &amp; CEO
                      </span>
                      <ul className="social_links unorder_list">
                        <li>
                          <a href="#!">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="gallery_section section_space_lg decoration_wrap pb-0">
            <div className="container">
              <div className="section_title">
                <h2 className="title_text">Gallery</h2>
              </div>
              <div className="gallery_carousel row">
                <div
                  className="common_carousel_3col"
                  data-slick='{"dots": false}'
                >
                  <div className="carousel_item col">
                    <div className="gallery_item">
                      <div className="item_image">
                        <img
                          src="src/assets/images/gallery/gallery_img_7.jpg"
                          alt="Pet Image"
                        />
                      </div>
                      <a className="item_content" href="#!">
                        <span className="d-block">
                          <small>SERVICES</small>
                        </span>{" "}
                        <strong className="d-block">Cat Grooming</strong>
                      </a>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="row">
                      <div className="col">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="src/assets/images/gallery/gallery_img_8.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="src/assets/images/gallery/gallery_img_9.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="src/assets/images/gallery/gallery_img_10.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="gallery_item">
                      <div className="item_image">
                        <img
                          src="src/assets/images/gallery/gallery_img_11.jpg"
                          alt="Pet Image"
                        />
                      </div>
                      <a className="item_content" href="#!">
                        <span className="d-block">
                          <small>SERVICES</small>
                        </span>{" "}
                        <strong className="d-block">Cat Grooming</strong>
                      </a>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="gallery_item">
                      <div className="item_image">
                        <img
                          src="src/assets/images/gallery/gallery_img_7.jpg"
                          alt="Pet Image"
                        />
                      </div>
                      <a className="item_content" href="#!">
                        <span className="d-block">
                          <small>SERVICES</small>
                        </span>{" "}
                        <strong className="d-block">Cat Grooming</strong>
                      </a>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="row">
                      <div className="col">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="src/assets/images/gallery/gallery_img_8.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="src/assets/images/gallery/gallery_img_9.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="gallery_item">
                          <div className="item_image">
                            <img
                              src="src/assets/images/gallery/gallery_img_10.jpg"
                              alt="Pet Image"
                            />
                          </div>
                          <a className="item_content" href="#!">
                            <span className="d-block">
                              <small>SERVICES</small>
                            </span>{" "}
                            <strong className="d-block">Cat Grooming</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_item col">
                    <div className="gallery_item">
                      <div className="item_image">
                        <img
                          src="src/assets/images/gallery/gallery_img_11.jpg"
                          alt="Pet Image"
                        />
                      </div>
                      <a className="item_content" href="#!">
                        <span className="d-block">
                          <small>SERVICES</small>
                        </span>{" "}
                        <strong className="d-block">Cat Grooming</strong>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel_arrow">
                  <div className="container">
                    <button
                      type="button"
                      className="cc3c_left_arrow slick-arrow"
                      style={{}}
                    >
                      <i className="far fa-arrow-left" />
                    </button>{" "}
                    <button
                      type="button"
                      className="cc3c_right_arrow slick-arrow"
                      style={{}}
                    >
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration_item shape_dot_2">
              <img
                src="src/assets/images/shape/shape_dot_group_4.svg"
                alt="Colorful Dots"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Service;
