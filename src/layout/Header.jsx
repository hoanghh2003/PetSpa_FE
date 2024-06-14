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

const Header = () => {
  return (
    // <section className="w-full flex justify-between p-5 border-b-2 lg:px-10 lg:py-5">
    //   <div>
    //     <PawPrint size={28} />
    //   </div>

    //   <div className="lg:hidden">
    //     <DropdownMenu>
    //       <DropdownMenuTrigger>
    //         <List />
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent className="w-52">
    //         <DropdownMenuLabel className="flex items-center gap-x-2">
    //           <Avatar>
    //             <AvatarImage src="https://github.com/shadcn.png" />
    //             <AvatarFallback>CN</AvatarFallback>
    //           </Avatar>
    //           <div>Name</div>
    //         </DropdownMenuLabel>
    //         <DropdownMenuSeparator />
    //         <DropdownMenuItem>Profile</DropdownMenuItem>
    //         <DropdownMenuItem>Billing</DropdownMenuItem>
    //         <DropdownMenuItem>Team</DropdownMenuItem>
    //         <DropdownMenuItem>Log out</DropdownMenuItem>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   </div>
    // </section>

    <section className="header_section header_default">
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
                  <li><a href="#!"><i class="fas fa-envelope"></i> <span><span class="__cf_email__" data-cfemail="452c2b232a05203d24283529206b262a28">[email&#160;protected]</span></span></a></li>
              </ul>
          </div>
      </div> */}
      <div className="header_bottom">
        <div className="container">
          {/* <link
            rel="shortcut icon"
            href="src/assets/images/logo/favourite_icon.png"
          /> */}
          <link rel="stylesheet" href="src/assets/css/all.css" />
          <div className="site_logo">
            <a href="Homepage">
              <img
                className="logo_before"
                src="assets/images/logo/logo.png"
                alt="Petpia Logo"
              />
            </a>
          </div>

          <nav className="main_menu navbar navbar-expand-lg">
            <div className="main_menu_inner" id="main_menu_dropdown">
              <ul className="main_menu_list unorder_list_center">
                <li>
                  <a href="HomePage">Home</a>
                </li>
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
                    <li className="active">
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
                  <ul className="dropdown-menu" aria-labelledby="shop_submenu">
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
                  <ul className="dropdown-menu" aria-labelledby="blog_submenu">
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
                  <ul className="dropdown-menu" aria-labelledby="pages_submenu">
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
                <small className="cart_counter">2</small> <span>item</span>
              </button>
              <div
                className="cart_dropdown dropdown-menu"
                aria-labelledby="cart_dropdown"
              >
                <ul className="cart_items_list unorder_list_block">
                  <li>
                    <a className="item_image" href="shop_details">
                      <img
                        src="assets/images/cart/cart_img_1.jpg"
                        alt="Pet Care Service"
                      />
                    </a>
                    <div className="item_content">
                      <h3 className="item_title">
                        <a href="shop_details">Flying Fish Cat Scratching</a>
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
                        src="assets/images/cart/cart_img_2.jpg"
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
    </section>
  );
};

export default Header;
