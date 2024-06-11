// import { List, PawPrint } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
  return (
    <section className="w-full flex justify-between p-5 border-b-2 lg:px-10 lg:py-5">
      <header className="header_section header_boxed">
        <div className="container">
          <link rel="stylesheet" href="src/assets/css/all.css" />
          <div className="box_wrap d-flex align-items-center justify-content-between">
            <div className="site_logo">
              <a href="HomePage">
                <img
                  className="logo_before"
                  src="src/assets/images/logo/logo.png"
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
            <ul className="unorder_list_right">
              <li className="dropdown">
                <button
                  className="cart_btn"
                  type="button"
                  id="cart_dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faBars} />{" "}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="cart_dropdown"
                >
                  <ul className="cart_items_list unorder_list_block">
                    <li>
                      <a className="item_image" href="account">
                      </a>
                      <div className="item_content">
                        <h3 className="item_title ">
                        <FontAwesomeIcon icon={faCircleUser} />{" "}
                        <a href="account">Account</a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <a className="item_image" href="account">
                      </a>
                      <div className="item_content">
                        <h3 className="item_title ">
                        <FontAwesomeIcon icon={faPaw} />{" "}
                        <a href="Pet">Pet</a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <a className="item_image" href="account">
                      </a>
                      <div className="item_content">
                        <h3 className="item_title ">
                        <FontAwesomeIcon icon={faCartShopping} />{" "}
                        <a href="Cart">Cart</a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <a className="item_image" href="account">
                      </a>
                      <div className="item_content">
                        <h3 className="item_title ">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />{" "}
                        <a href="Login">Log in</a>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <a className="item_image" href="account">
                      </a>
                      <div className="item_content">
                        <h3 className="item_title ">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
                        <a href="Logout">Log out</a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
