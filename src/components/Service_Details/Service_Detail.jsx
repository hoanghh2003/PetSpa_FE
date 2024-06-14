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

function Service_Details() {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Service Details - Petpia – Pet Care Service Template</title>
        <link rel="shortcut icon" href="as/images/logo/favourite_icon.png" />
        <link rel="stylesheet" href="src/assets/css/all.css" />
        <div className="body_wrap">
          <div className="backtotop">
            <a href="#" className="scroll">
              <i className="far fa-arrow-up" />
            </a>
          </div>
          <header className="header_section header_default">
            {/* <div class="header_top">
          <div class="container">
              <ul class="social_links unorder_list">
                  <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#!"><i class="fab fa-whatsapp"></i></a></li>
              </ul>
              <ul class="icon_list unorder_list">
                  <li><a href="#!"><i class="fas fa-envelope"></i> <span><span class="__cf_email__" data-cfemail="5a33343c351a3f223b372a363f74393537">petspaswp391@gmail.com</span></span></a></li>
              </ul>
          </div>
      </div> */}
            <div className="header_bottom">
              <div className="container">
                <div className="site_logo">
                  <a href="Homepage">
                    <img
                      className="logo_before"
                      src="as/images/logo/logo.png"
                      alt="Petpia Logo"
                    />
                  </a>
                </div>
                <nav className="main_menu navbar navbar-expand-lg">
                  <div id="main_menu_dropdown">
                    <ul className="main_menu_list unorder_list_center">
                      <li>
                        <a href="HomePage">Home</a>
                      </li>
                      {/* <li class="active dropdown">
                                  <a class="nav-link" href="#" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                                  <ul class="dropdown-menu" aria-labelledby="home_submenu">
                                      <li class="active">
                                          <a href="index_1">Home V.1</a>
                                      </li>
                                      <li>
                                          <a href="index_2">Home V.2</a>
                                      </li>
                                  </ul>
                              </li> */}
                      <li className="active dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="service_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Services
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="service_submenu"
                        >
                          <li>
                            <a href="service">Our Service</a>
                          </li>
                          <li className="active">
                            <a href="service_details">Service Details</a>
                          </li>
                          <li>
                            <a href="gallery">Our Gallery</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="shop_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Shop
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="shop_submenu"
                        >
                          <li>
                            <a href="shop">Our Shop</a>
                          </li>
                          <li>
                            <a href="shop_details">Shop Details</a>
                          </li>
                          <li>
                            <a href="sales">Sales Page</a>
                          </li>
                          <li>
                            <a href="cart">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="shipping_info">Shipping Info</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="blog_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Blog
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="blog_submenu"
                        >
                          <li>
                            <a href="blog">Our Blogs</a>
                          </li>
                          <li>
                            <a href="blog_details">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="pages_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Pages
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="pages_submenu"
                        >
                          <li>
                            <a href="about">About Us</a>
                          </li>
                          <li>
                            <a href="contact">Contact Us</a>
                          </li>
                          <li>
                            <a href="faq">FAQ</a>
                          </li>
                          <li>
                            <a href="error">Error 404</a>
                          </li>
                          <li>
                            <a href="team">Our Team</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
                <ul className="header_btns_group unorder_list_right">
                  <li>
                    <button
                      className="mobile_menu_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#main_menu_dropdown"
                      aria-controls="main_menu_dropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="far fa-bars" />
                    </button>
                  </li>
                  <li className="dropdown">
                    <button
                      className="cart_btn"
                      type="button"
                      id="cart_dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-shopping-cart" />{" "}
                      <small className="cart_counter">2</small>{" "}
                      <span>item</span>
                    </button>
                    <div
                      className="cart_dropdown dropdown-menu"
                      aria-labelledby="cart_dropdown"
                    >
                      <ul className="cart_items_list unorder_list_block">
                        <li>
                          <a className="item_image" href="shop_details">
                            <img
                              src="as/images/cart/cart_img_1.jpg"
                              alt="Pet Care Service"
                            />
                          </a>
                          <div className="item_content">
                            <h3 className="item_title">
                              <a href="shop_details">
                                Flying Fish Cat Scratching
                              </a>
                            </h3>
                            <span className="item_price">1 × $12.35</span>
                          </div>
                          <button className="remove_btn" type="button">
                            <i className="fal fa-times" />
                          </button>
                        </li>
                        <li>
                          <a className="item_image" href="shop_details">
                            <img
                              src="as/images/cart/cart_img_2.jpg"
                              alt="Pet Care Service"
                            />
                          </a>
                          <div className="item_content">
                            <h3 className="item_title">
                              <a href="shop_details">Pet Bed</a>
                            </h3>
                            <span className="item_price">1 × $58.16</span>
                          </div>
                          <button className="remove_btn" type="button">
                            <i className="fal fa-times" />
                          </button>
                        </li>
                      </ul>
                      <hr />
                      <div className="total_price">
                        <span>Total</span> <strong>$70.51</strong>
                      </div>
                      <a className="btn border_primary" href="cart">
                        Update Cart
                      </a>{" "}
                      <a className="btn btn_primary" href="cart">
                        Checkout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <main>
            <section className="breadcrumb_section">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-4 col-md-7 col-sm-9">
                    <ul className="breadcrumb_nav">
                      <li>
                        <a href="Homepage">Home</a>
                      </li>
                      <li>Single</li>
                    </ul>
                    <h1 className="page_title">Pet Sitting</h1>
                    <p className="page_description mb-0">
                      Feugiat scelerisque varius morbi enim nunc faucibus.
                      Imperdiet dui accumsan sit amet nulla facilisi morbi
                    </p>
                  </div>
                </div>
              </div>
              <div className="breadcrumb_img">
                <img
                  src="as/images/breadcrumb/breadcrumb_img_3.png"
                  alt="Pet Care Service"
                />
              </div>
            </section>
            <section className="sitting_service section_space_lg">
              <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col col-lg-6">
                    <div className="pe-lg-5">
                      <div className="section_title">
                        <h2 className="title_text">Pet Sitting Service</h2>
                        <p className="mb-0">
                          Justo eget magna fermentum iaculis eu non diam
                          phasellus. Eu lobortis elementum nibh tellus molestie
                          nunc. Ullamcorper eget nulla facilisi etiam dignissim
                          diam. Eget felis eget nunc lobortis mattis
                        </p>
                      </div>
                      <div className="banner_policy_items row">
                        <div className="col">
                          <div className="iconbox_item iconbox_lefticon">
                            <div className="item_icon">
                              <i className="fas fa-dog-leashed" />
                            </div>
                            <div className="item_content">
                              <h3 className="item_title mb-0">Companionship</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="iconbox_item iconbox_lefticon">
                            <div className="item_icon">
                              <i className="fas fa-tennis-ball" />
                            </div>
                            <div className="item_content">
                              <h3 className="item_title mb-0">
                                Walks and Play Time
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="iconbox_item iconbox_lefticon">
                            <div className="item_icon">
                              <i className="fas fa-bone" />
                            </div>
                            <div className="item_content">
                              <h3 className="item_title mb-0">
                                Fresh water and food
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="iconbox_item iconbox_lefticon">
                            <div className="item_icon">
                              <i className="fas fa-hands-heart" />
                            </div>
                            <div className="item_content">
                              <h3 className="item_title mb-0">
                                Lots of love and snuggles
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="services_image_carousel zoom-gallery">
                      <div
                        className="common_carousel_3col row"
                        data-slick='{"dots": false}'
                      >
                        <div className="col carousel_item">
                          <a
                            className="popup_image"
                            href="as/images/service/service_img_7.jpg"
                          >
                            <img
                              src="as/images/service/service_img_7.jpg"
                              alt="Pet Service"
                            />
                          </a>
                        </div>
                        <div className="col carousel_item">
                          <a
                            className="popup_image"
                            href="as/images/service/service_img_8.jpg"
                          >
                            <img
                              src="as/images/service/service_img_8.jpg"
                              alt="Pet Service"
                            />
                          </a>
                        </div>
                        <div className="col carousel_item">
                          <a
                            className="popup_image"
                            href="as/images/service/service_img_9.jpg"
                          >
                            <img
                              src="as/images/service/service_img_9.jpg"
                              alt="Pet Service"
                            />
                          </a>
                        </div>
                        <div className="col carousel_item">
                          <a
                            className="popup_image"
                            href="as/images/service/service_img_7.jpg"
                          >
                            <img
                              src="as/images/service/service_img_7.jpg"
                              alt="Pet Service"
                            />
                          </a>
                        </div>
                        <div className="col carousel_item">
                          <a
                            className="popup_image"
                            href="as/images/service/service_img_8.jpg"
                          >
                            <img
                              src="as/images/service/service_img_8.jpg"
                              alt="Pet Service"
                            />
                          </a>
                        </div>
                        <div className="col carousel_item">
                          <a
                            className="popup_image"
                            href="as/images/service/service_img_9.jpg"
                          >
                            <img
                              src="as/images/service/service_img_9.jpg"
                              alt="Pet Service"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="service_section bg_gray section_space_lg"
              style={{
                backgroundImage: 'url("as/images/shape/shape_paws_bg_2.svg")',
              }}
            >
              <div className="container">
                <div className="section_title text-center mb-2">
                  <div className="row justify-content-center">
                    <div className="col col-lg-5">
                      <h2 className="title_text">
                        <span className="sub_title">Our Prices</span> Pet
                        Services + Rates
                      </h2>
                      <p className="mb-0">
                        We can fully customize your pet sitting schedule to fit
                        your pet’s needs. Pick and choose what visits work best
                        for you and your family
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="services_price_items_wrap">
                      <div className="service_price_item">
                        <div className="item_image">
                          <img
                            src="as/images/service/service_img_1.jpg"
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
                            1 x Visit per day, small pet visit can be added per
                            quote
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
                            src="as/images/service/service_img_2.jpg"
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
                            src="as/images/service/service_img_3.jpg"
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
                            Drop-off and pick-up times are flexible. $10 each
                            additional dog.
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
                            src="as/images/service/service_img_4.jpg"
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
                            1 x Visit per day, small pet visit can be added per
                            quote
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
                            src="as/images/service/service_img_5.jpg"
                            alt="Pet Care Service"
                          />
                        </div>
                        <div className="item_content">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="service_time">
                              <i className="fas fa-clock" /> 65 Overnight Pet
                              Sitting
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
                            src="as/images/service/service_img_6.jpg"
                            alt="Pet Care Service"
                          />
                        </div>
                        <div className="item_content">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="service_time">
                              <i className="fas fa-clock" /> 40 Private Boarding
                            </div>
                            <div className="item_price">
                              <span>$36.00</span>
                            </div>
                          </div>
                          <h3 className="item_title mb-0">
                            Drop-off and pick-up times are flexible. $10 each
                            additional dog.
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
            </section>
            <section className="about_section section_space_lg decoration_wrap">
              <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col col-lg-5">
                    <div className="section_title">
                      <h2 className="title_text">Welcome To Our Family</h2>
                      <p>
                        Tristique nulla aliquet enim tortor at auctor urna nunc.
                        Massa enim nec dui nunc mattis enim ut tellus. Auctor
                        augue mauris augue neque gravida in fermentum
                      </p>
                    </div>
                    <ul className="icon_list unorder_list_block mb-0">
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
                  </div>
                  <div className="col col-lg-6">
                    <div className="about_image_1">
                      <div className="image_1 p-0">
                        <img
                          src="as/images/about/about_img_7.jpg"
                          alt="Pet Doctor"
                        />
                      </div>
                      <div className="image_2">
                        <img
                          src="as/images/about/about_img_8.jpg"
                          alt="Cat Image"
                        />
                      </div>
                      <div className="image_3">
                        <img
                          src="as/images/about/about_img_9.jpg"
                          alt="Dog Image"
                        />
                      </div>
                      <div className="shape_img_1">
                        <img
                          src="as/images/shape/shape_circle_1.svg"
                          alt="Yellow Circle"
                        />
                      </div>
                      <div className="shape_img_2">
                        <img
                          src="as/images/shape/shape_circle_3.svg"
                          alt="Yellow Circle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="decoration_item shape_dot_1">
                <img
                  src="as/images/shape/shape_dot_group_1.svg"
                  alt="Colorful Dots"
                />
              </div>
            </section>
            <section className="testimonial_section bg_gray section_space_lg">
              <div className="container">
                <div className="section_title">
                  <h2 className="title_text mb-0">
                    <span className="sub_title">Our Reviews</span> What People
                    Say
                  </h2>
                </div>
              </div>
              <div className="testimonial_carousel">
                <div
                  className="row common_carousel_3col"
                  data-slick='{"dots": false, "centerMode": true}'
                >
                  <div className="col carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_admin">
                        <div className="admin_thumbnail">
                          <img
                            src="as/images/meta/thumbnail_img_1.png"
                            alt="Pet Thumbnail Image"
                          />
                        </div>
                        <div className="admin_info">
                          <h4 className="admin_name">Home Visits</h4>
                          <span className="admin_designation">
                            Lucas Simões
                          </span>
                        </div>
                      </div>
                      <ul className="rating_star">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mb-0">
                        Tristique nulla aliquet enim tortor at auctor urna nunc.
                        Massa enim nec dui nunc mattis enim ut tellus
                      </p>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                  </div>
                  <div className="col carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_admin">
                        <div className="admin_thumbnail">
                          <img
                            src="as/images/meta/thumbnail_img_2.png"
                            alt="Pet Thumbnail Image"
                          />
                        </div>
                        <div className="admin_info">
                          <h4 className="admin_name">Dog Boarding</h4>
                          <span className="admin_designation">
                            Wilhelm Dowall
                          </span>
                        </div>
                      </div>
                      <ul className="rating_star">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mb-0">
                        Lectus magna fringilla urna porttitor rhoncus dolor
                        purus non enim. Tellus in hac habitasse platea dictumst
                      </p>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                  </div>
                  <div className="col carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_admin">
                        <div className="admin_thumbnail">
                          <img
                            src="as/images/meta/thumbnail_img_3.png"
                            alt="Pet Thumbnail Image"
                          />
                        </div>
                        <div className="admin_info">
                          <h4 className="admin_name">Pet Training</h4>
                          <span className="admin_designation">
                            Lara Madrigal
                          </span>
                        </div>
                      </div>
                      <ul className="rating_star">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mb-0">
                        Ut tortor pretium viverra suspendisse potenti nullam.
                        Venenatis urna cursus eget nunc scelerisque viverra
                        mauris in aliquam
                      </p>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                  </div>
                  <div className="col carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_admin">
                        <div className="admin_thumbnail">
                          <img
                            src="as/images/meta/thumbnail_img_4.png"
                            alt="Pet Thumbnail Image"
                          />
                        </div>
                        <div className="admin_info">
                          <h4 className="admin_name">Home Visit</h4>
                          <span className="admin_designation">
                            Lara Madrigal
                          </span>
                        </div>
                      </div>
                      <ul className="rating_star">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mb-0">
                        Ut tortor pretium viverra suspendisse potenti nullam.
                        Venenatis urna cursus eget nunc scelerisque viverra
                        mauris in aliquam
                      </p>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                  </div>
                  <div className="col carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_admin">
                        <div className="admin_thumbnail">
                          <img
                            src="as/images/meta/thumbnail_img_1.png"
                            alt="Pet Thumbnail Image"
                          />
                        </div>
                        <div className="admin_info">
                          <h4 className="admin_name">Home Visits</h4>
                          <span className="admin_designation">
                            Lucas Simões
                          </span>
                        </div>
                      </div>
                      <ul className="rating_star">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mb-0">
                        Tristique nulla aliquet enim tortor at auctor urna nunc.
                        Massa enim nec dui nunc mattis enim ut tellus
                      </p>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                  </div>
                  <div className="col carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_admin">
                        <div className="admin_thumbnail">
                          <img
                            src="as/images/meta/thumbnail_img_2.png"
                            alt="Pet Thumbnail Image"
                          />
                        </div>
                        <div className="admin_info">
                          <h4 className="admin_name">Dog Boarding</h4>
                          <span className="admin_designation">
                            Wilhelm Dowall
                          </span>
                        </div>
                      </div>
                      <ul className="rating_star">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mb-0">
                        Lectus magna fringilla urna porttitor rhoncus dolor
                        purus non enim. Tellus in hac habitasse platea dictumst
                      </p>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                  </div>
                  <div className="col carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_admin">
                        <div className="admin_thumbnail">
                          <img
                            src="as/images/meta/thumbnail_img_3.png"
                            alt="Pet Thumbnail Image"
                          />
                        </div>
                        <div className="admin_info">
                          <h4 className="admin_name">Pet Training</h4>
                          <span className="admin_designation">
                            Lara Madrigal
                          </span>
                        </div>
                      </div>
                      <ul className="rating_star">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mb-0">
                        Ut tortor pretium viverra suspendisse potenti nullam.
                        Venenatis urna cursus eget nunc scelerisque viverra
                        mauris in aliquam
                      </p>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                  </div>
                  <div className="col carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_admin">
                        <div className="admin_thumbnail">
                          <img
                            src="as/images/meta/thumbnail_img_4.png"
                            alt="Pet Thumbnail Image"
                          />
                        </div>
                        <div className="admin_info">
                          <h4 className="admin_name">Home Visit</h4>
                          <span className="admin_designation">
                            Lara Madrigal
                          </span>
                        </div>
                      </div>
                      <ul className="rating_star">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mb-0">
                        Ut tortor pretium viverra suspendisse potenti nullam.
                        Venenatis urna cursus eget nunc scelerisque viverra
                        mauris in aliquam
                      </p>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="carousel_arrow">
                  <div className="container">
                    <button type="button" className="cc3c_left_arrow">
                      <i className="far fa-arrow-left" />
                    </button>{" "}
                    <button type="button" className="cc3c_right_arrow">
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="getservice_section section_space_lg pb-0">
              <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                  <div className="col col-lg-5 d-none d-lg-block">
                    <div className="getservice_image">
                      <img
                        src="as/images/about/about_img_10.png"
                        alt="Pet Care Service"
                      />
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="getservice_form">
                      <div className="section_title mb-4">
                        <h2 className="title_text">Get a Service</h2>
                        <p className="mb-0">
                          Massa enim nec dui nunc mattis enim ut tellus. Auctor
                          augue mauris augue neque gravida in fermentum
                        </p>
                      </div>
                      <form action="#">
                        <div className="row">
                          <div className="col col-md-6">
                            <div className="form_item mb-0">
                              <label
                                htmlFor="input_name"
                                className="input_title"
                              >
                                Name<sup>*</sup>
                              </label>{" "}
                              <input
                                id="input_name"
                                type="text"
                                name="name"
                                placeholder="Type your Name"
                              />
                            </div>
                          </div>
                          <div className="col col-md-6">
                            <div className="form_item mb-0">
                              <label
                                htmlFor="input_email"
                                className="input_title"
                              >
                                Email<sup>*</sup>
                              </label>{" "}
                              <input
                                id="input_email"
                                type="email"
                                name="email"
                                placeholder="Type your Email"
                              />
                            </div>
                          </div>
                          <div className="col col-md-6">
                            <div className="select_option mb-0">
                              <label
                                htmlFor="select_service"
                                className="input_title"
                              >
                                Select Service
                              </label>{" "}
                              <select id="select_service">
                                <option data-display="Select Service">
                                  Nothing
                                </option>
                                <option value={1}>Some option</option>
                                <option value={2}>Another option</option>
                                <option value={3} disabled="disabled">
                                  A disabled option
                                </option>
                                <option value={4}>Potato</option>
                              </select>
                            </div>
                          </div>
                          <div className="col col-md-6">
                            <div className="form_item mb-0">
                              <label
                                htmlFor="input_time"
                                className="input_title"
                              >
                                Select Time
                              </label>{" "}
                              <input id="input_time" type="time" name="time" />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form_item">
                              <label
                                htmlFor="input_textarea"
                                className="input_title"
                              >
                                Your Message
                              </label>{" "}
                              <textarea
                                id="input_textarea"
                                name="message"
                                placeholder="Type your message"
                                defaultValue={""}
                              />
                            </div>
                            <button type="submit" className="btn btn_primary">
                              <i className="fas fa-paw" /> Get Services
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="service_section section_space_lg pb-0">
              <div className="container">
                <div className="section_title">
                  <h2 className="title_text mb-0">Other Services</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col col-lg-4">
                    <div
                      className="service_item"
                      style={{
                        backgroundImage:
                          'url("as/images/shape/shape_path_1.svg")',
                      }}
                    >
                      <div className="title_wrap">
                        <div className="item_icon">
                          <img
                            src="as/images/icon/icon_pet_training.svg"
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
                        <i className="far fa-long-arrow-right" />
                      </a>
                      <div className="decoration_image">
                        <img
                          src="as/images/shape/shape_paws.svg"
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
                          'url("as/images/shape/shape_path_1.svg")',
                      }}
                    >
                      <div className="title_wrap">
                        <div className="item_icon">
                          <img
                            src="as/images/icon/icon_pet_grooming.svg"
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
                        <i className="far fa-long-arrow-right" />
                      </a>
                      <div className="decoration_image">
                        <img
                          src="as/images/shape/shape_paws.svg"
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
                          'url("as/images/shape/shape_path_1.svg")',
                      }}
                    >
                      <div className="title_wrap">
                        <div className="item_icon">
                          <img
                            src="as/images/icon/icon_pet_walking.svg"
                            alt="Pet Walking"
                          />
                        </div>
                        <h3 className="item_title mb-0">
                          Walking &amp; Sitting
                        </h3>
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
                        <i className="far fa-long-arrow-right" />
                      </a>
                      <div className="decoration_image">
                        <img
                          src="as/images/shape/shape_paws.svg"
                          alt="Pet Paws"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="footer_section">
            <div className="footer_widget_area section_space_lg">
              <div className="container">
                <div className="row justify-content-lg-between">
                  <div className="col col-lg-3 col-md-6 col-sm-6">
                    <div className="footer_widget footer_about">
                      <div className="site_logo">
                        <a href="Homepage">
                          <img
                            className="logo_before"
                            src="as/images/logo/logo.png"
                            alt="Petpia Logo"
                          />
                        </a>
                      </div>
                      <p>
                        Tristique nulla aliquet enim tortor at auctor urna nunc.
                        Massa enim nec dui nunc mattis enim ut tellus. Sed ut
                        perspiciatis unde ...
                      </p>
                      <div className="footer_hotline iconbox_item iconbox_lefticon">
                        <div className="item_icon">
                          <i className="fas fa-phone" />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">
                            <a href="tel:(913)756-3126">0356.105.488</a>
                          </h3>
                          <p className="mb-0">Got Questions? Call us 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-3 col-md-6 col-sm-6">
                    <div className="footer_widget">
                      <h3 className="footer_widget_title">Working Hours</h3>
                      <div className="office_hour">
                        <ul className="unorder_list_block">
                          <li>
                            <span>Mon - Fri:</span> <span>7am – 6pm</span>
                          </li>
                          <li>
                            <span>Saturday:</span> <span>9am – 4pm</span>
                          </li>
                          <li>
                            <span>Sunday:</span>{" "}
                            <span>
                              <strong>Closed</strong>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-2 col-md-6 col-sm-6">
                    <div className="footer_widget">
                      <h3 className="footer_widget_title">Useful Links</h3>
                      <div className="page_list">
                        <ul className="unorder_list_block">
                          <li>
                            <a href="Homepage">
                              <i className="fas fa-circle" />
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="about">
                              <i className="fas fa-circle" />
                              About
                            </a>
                          </li>
                          <li>
                            <a href="service">
                              <i className="fas fa-circle" />
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="shop">
                              <i className="fas fa-circle" />
                              Shop
                            </a>
                          </li>
                        </ul>
                        <ul className="unorder_list_block">
                          <li>
                            <a href="faq">
                              <i className="fas fa-circle" />
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a href="gallery">
                              <i className="fas fa-circle" />
                              Gallery
                            </a>
                          </li>
                          <li>
                            <a href="shipping_info">
                              <i className="fas fa-circle" />
                              Delivery
                            </a>
                          </li>
                          <li>
                            <a href="deals">
                              <i className="fas fa-circle" />
                              Sales
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-3 col-md-6 col-sm-6">
                    <div className="footer_widget">
                      <h3 className="footer_widget_title">Newsletter</h3>
                      <form action="#">
                        <div className="footer_newslatter">
                          <p>
                            Be first in the queue! Get our latest news straight
                            to your inbox.
                          </p>
                          <div className="form_item">
                            <input
                              type="text"
                              name="newsletter-email"
                              placeholder="Email"
                            />{" "}
                            <button type="submit">
                              <i className="far fa-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="container">
                <p className="copyrights_text text-center">
                  {" "}
                  Copyrights 2022 © Petpia. Thiết kế website bởi{" "}
                  <a target="_blank" href="https://adsmo.vn">
                    ADSMO
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Service_Details;
