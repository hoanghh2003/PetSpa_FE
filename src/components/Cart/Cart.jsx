
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
        </div>
      </div>
    </div>
  );
}

export default Cart;
