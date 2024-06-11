import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
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

function Cart() {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Shopping Cart - Petpia – Pet Care Service Template</title>
        <link rel="shortcut icon" href="src/assets/images/logo/favourite_icon.png" />
        <link rel="stylesheet" type="text/css" href="src/assets/css/all.css" />
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
                  <li><a href="#!"><i class="fas fa-phone"></i> <span>0356.105.488</span></a></li>
                  <li><a href="#!"><i class="fas fa-envelope"></i> <span><span class="__cf_email__" data-cfemail="d6bfb8b0b996b3aeb7bba6bab3f8b5b9bb">[email&#160;protected]</span></span></a></li>
              </ul>
          </div>
      </div> */}
            <div className="header_bottom">
              <div className="container">
                <div className="site_logo">
                  <a href="Homepage">
                    <img
                      className="logo_before"
                      src="src/assets/images/logo/logo.png"
                      alt="Petpia Logo"
                    />
                  </a>
                </div>
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    id="main_menu_dropdown"
                  >
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
                      <li className="dropdown">
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
                          <li>
                            <a href="service_details">Service Details</a>
                          </li>
                          <li>
                            <a href="gallery">Our Gallery</a>
                          </li>
                        </ul>
                      </li>
                      <li className="active dropdown">
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
                          <li className="active">
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
                       <FontAwesomeIcon icon={faCartShopping} />{" "}
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
                              src="src/assets/images/cart/cart_img_1.jpg"
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
                              src="src/assets/images/cart/cart_img_2.jpg"
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
            <div className="breadcrumb_nav_wrapper">
              <div className="container">
                <ul className="breadcrumb_nav mb-0">
                  <li>
                    <a href="HomePage">Home</a>
                  </li>
                  <li>Cart</li>
                </ul>
              </div>
            </div>
            <section className="cart_section section_space_lg">
              <div className="container">
                <div className="section_title">
                  <h2 className="title_text mb-0">Your Cart</h2>
                </div>
                <div className="cart_table_wrap">
                  <div className="table_header d-none d-lg-block">
                    <ul className="table_wrap unorder_list">
                      <li>
                        <span className="col_title">Product</span>
                      </li>
                      <li>
                        <span className="col_title">Price</span>
                      </li>
                      <li>
                        <span className="col_title">Quantity</span>
                      </li>
                      <li>
                        <span className="col_title">Total</span>
                      </li>
                    </ul>
                  </div>
                  <div className="table_body">
                    <ul className="table_wrap unorder_list">
                      <li>
                        <div className="small_product_item">
                          <div className="item_image">
                            <img
                              src="src/assets/images/shop/product_img_5.jpg"
                              alt="Pet Accessories"
                            />
                          </div>
                          <div className="item_content">
                            <h3 className="item_title">Tug of War Dog Toy</h3>
                            <p className="mb-0">Color: red</p>
                          </div>
                        </div>
                        <button type="button" className="remove_btn">
                          <i className="fal fa-times" />
                        </button>
                      </li>
                      <li>
                        <span className="col_title d-lg-none">Price</span>
                        <div className="item_price">
                          <del>$22.12</del> <span>$12.12</span>
                        </div>
                      </li>
                      <li>
                        <span className="col_title d-lg-none">Quantity</span>
                        <div className="quantity_wrap">
                          <span className="quantity_title">Qty:</span>
                          <form action="#">
                            <div className="quantity_form">
                              <button
                                type="button"
                                className="input_number_decrement"
                              >
                                <i className="far fa-angle-down" />
                              </button>{" "}
                              <input
                                className="input_number"
                                type="text"
                                defaultValue={1}
                              />{" "}
                              <button
                                type="button"
                                className="input_number_increment"
                              >
                                <i className="far fa-angle-up" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                      <li>
                        <span className="col_title d-lg-none">Total</span>
                        <div className="item_price">
                          <span>$12.12</span>
                        </div>
                      </li>
                    </ul>
                    <ul className="table_wrap unorder_list">
                      <li>
                        <div className="small_product_item">
                          <div className="item_image">
                            <img
                              src="src/assets/images/shop/product_img_28.jpg"
                              alt="Pet Accessories"
                            />
                          </div>
                          <div className="item_content">
                            <h3 className="item_title">Dog Residence Mat</h3>
                            <p className="mb-0">Color: red</p>
                          </div>
                        </div>
                        <button type="button" className="remove_btn">
                          <i className="fal fa-times" />
                        </button>
                      </li>
                      <li>
                        <span className="col_title d-lg-none">Price</span>
                        <div className="item_price">
                          <span>$32.39</span>
                        </div>
                      </li>
                      <li>
                        <span className="col_title d-lg-none">Quantity</span>
                        <div className="quantity_wrap">
                          <span className="quantity_title">Qty:</span>
                          <form action="#">
                            <div className="quantity_form">
                              <button
                                type="button"
                                className="input_number_decrement"
                              >
                                <i className="far fa-angle-down" />
                              </button>{" "}
                              <input
                                className="input_number"
                                type="text"
                                defaultValue={1}
                              />{" "}
                              <button
                                type="button"
                                className="input_number_increment"
                              >
                                <i className="far fa-angle-up" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                      <li>
                        <span className="col_title d-lg-none">Total</span>
                        <div className="item_price">
                          <span>$32.39</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="table_footer">
                    <div className="row align-items-center">
                      <div className="col col-lg-6">
                        <div className="coupon_form">
                          <form action="#">
                            <div className="form_item mb-0">
                              <input
                                type="text"
                                name="coupon"
                                placeholder="Coupon Code"
                              />{" "}
                              <button
                                type="submit"
                                className="btn border_primary"
                              >
                                Apply Coupon
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <ul className="btns_group unorder_list_right">
                          <li>
                            <a className="btn_unfill" href="shop">
                              <span>Continue Shopping</span>{" "}
                              <i className="far fa-long-arrow-right" />
                            </a>
                          </li>
                          <li>
                            <a className="btn border_primary" href="cart">
                              Update Cart
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="note_form">
                    <div className="row">
                      <div className="col col-lg-6">
                        <div className="form_item mb-0">
                          <label className="input_title" htmlFor="input_note">
                            Add a note to your order
                          </label>{" "}
                          <textarea
                            id="input_note"
                            name="note"
                            placeholder="Type text"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col col-lg-6">
                        <ul className="subtotal_info unorder_list_block">
                          <li>Subtotal before delivery</li>
                          <li>$32.39</li>
                          <li>
                            <a className="btn btn_primary" href="#!">
                              <i className="fas fa-paw" /> Checkout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="policy_section">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-3 col-md-6">
                    <div
                      className="iconbox_item iconbox_default"
                      style={{
                        backgroundImage:
                          'url("src/assets/images/shape/shape_path_1.svg")',
                      }}
                    >
                      <div className="item_icon">
                        <i className="fas fa-shipping-fast" />
                      </div>
                      <h3 className="policy_title">Trust &amp; Safety</h3>
                      <p className="mb-0">
                        Velit euismod in pellentesque massa placerat duis.
                        Pellentesque habitant morbi tristique senectus
                      </p>
                    </div>
                  </div>
                  <div className="col col-lg-3 col-md-6">
                    <div
                      className="iconbox_item iconbox_default"
                      style={{
                        backgroundImage:
                          'url("src/assets/images/shape/shape_path_1.svg")',
                      }}
                    >
                      <div className="item_icon">
                        <i className="fas fa-badge-percent" />
                      </div>
                      <h3 className="policy_title">Discounts</h3>
                      <p className="mb-0">
                        Leo a diam sollicitudin tempor nisl nunc mi. Magna ac
                        placerat vestibulm lectus mauris
                      </p>
                    </div>
                  </div>
                  <div className="col col-lg-3 col-md-6">
                    <div
                      className="iconbox_item iconbox_default"
                      style={{
                        backgroundImage:
                          'url("src/assets/images/shape/shape_path_1.svg")',
                      }}
                    >
                      <div className="item_icon">
                        <i className="fas fa-user-headset" />
                      </div>
                      <h3 className="policy_title">Support</h3>
                      <p className="mb-0">
                        Bibendum ut tristique et egestas quis ipsum suspendisse
                        ultrices. Convallis tellus id interdum velit
                      </p>
                    </div>
                  </div>
                  <div className="col col-lg-3 col-md-6">
                    <div
                      className="iconbox_item iconbox_default"
                      style={{
                        backgroundImage:
                          'url("src/assets/images/shape/shape_path_1.svg")',
                      }}
                    >
                      <div className="item_icon">
                        <i className="fas fa-shield-check" />
                      </div>
                      <h3 className="policy_title">Guarantee</h3>
                      <p className="mb-0">
                        Dignissim diam quis enim lobortis scelerisque fermentum
                        dui. Turpis in eu mi bibendum neque
                      </p>
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
                            src="src/assets/images/logo/logo.png"
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

export default Cart;
