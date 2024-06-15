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
import { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox, Form, message } from "antd";
import { DatePicker, Space } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [birthday, setBirthday] = useState();
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
            toast.error("An unexpected error occurred.");
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
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Shopping Cart - Petpia – Pet Care Service Template</title>
        <link rel="shortcut icon" href="as/images/logo/favourite_icon.png" />
        <link rel="stylesheet" type="text/css" href="as/css/all.css" />
        <div className="body_wrap">
          <div className="backtotop">
            <a href="#" className="scroll">
              <i className="far fa-arrow-up" />
            </a>
          </div>

          <main>
            <div className="breadcrumb_nav_wrapper">
              {/* <div className="container">
                <ul className="breadcrumb_nav mb-0">
                  <li>
                    <a href="HomePage">Home</a>
                  </li>
                  <li>Cart</li>
                </ul>
              </div> */}
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
                        <span className="col_title">Service</span>
                      </li>
                      <li>
                        <span className="col_title">PetName</span>
                      </li>
                      <li>
                        <span className="col_title">Price</span>
                      </li>
                      <li>
                        <span className="col_title">Total</span>
                      </li>
                    </ul>
                  </div>
                  <div className="table_body">
                    {products.map((product, index) => (
                      <ul className="table_wrap unorder_list" key={index}>
                        <li>
                          <Checkbox
                            checked={product.selected}
                            onChange={() =>
                              handleCheckboxChange(
                                product.serviceId,
                                product.petId
                              )
                            }
                          ></Checkbox>

                          <div className="small_product_item">
                            <div className="item_image">
                              <h3 className="item_title">
                                {product.serviceName}
                              </h3>
                            </div>
                            <div className="item_content">
                              {/* <p className="mb-0">Color: red</p> */}
                            </div>
                          </div>
                          <button type="button" className="remove_btn">
                            <i className="fal fa-times" />
                          </button>
                        </li>
                        <li>
                          <span className="col_title d-lg-none">Price</span>
                          <div className="item_price">
                            <h3 className="item_title">{product.petName}</h3>
                          </div>
                        </li>
                        <li>
                          <div className="quantity_wrap">
                            {product.servicePrice}$
                          </div>
                        </li>
                        <li>
                          <span className="col_title d-lg-none">Total</span>
                          <div className="item_price">
                            <span>{product.servicePrice}</span>
                          </div>
                        </li>
                      </ul>
                    ))}
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
                              ></button>
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
                            <p style={{ color: "black" }}>{error}</p>
                            <Form>
                              <Form.Item label="Birthday">
                                <Space direction="vertical">
                                  <DatePicker
                                    showTime
                                    value={birthday}
                                    onChange={(date) => setBirthday(date)}
                                  />
                                </Space>
                              </Form.Item>
                            </Form>
                            <ToastContainer />
                            {products.length > 0 && (
                              <button
                                onClick={handleBooking}
                                id="checkout-button"
                                className="btn btn_primary"
                                disabled={isLoading}
                              >
                                Checkout
                              </button>
                            )}
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
                          'url("as/images/shape/shape_path_1.svg")',
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
                          'url("as/images/shape/shape_path_1.svg")',
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
                          'url("as/images/shape/shape_path_1.svg")',
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
                          'url("as/images/shape/shape_path_1.svg")',
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

export default Cart;
