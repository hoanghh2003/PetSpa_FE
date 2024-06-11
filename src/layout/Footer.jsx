// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { MoveRight } from "lucide-react";
const Footer = () => {
  return (
    <footer className="footer_section">
          <div className="footer_widget_area section_space_lg">
            <div className="container">
              <div className="row justify-content-lg-between">
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget footer_about">
                    <div className="site_logo">
                      <a href="HomePage">
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
                          <span>Mon - Fri:</span>
                          <span>7am – 6pm</span>
                        </li>
                        <li>
                          <span>Saturday:</span>
                          <span>9am – 4pm</span>
                        </li>
                        <li>
                          <span>Sunday:</span>
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
                          <a href="HomePage">
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
                          Be first in the queue! Get our latest news straight to
                          your inbox.
                        </p>
                        <div className="form_item">
                          <input
                            type="text"
                            name="newsletter-email"
                            placeholder="Email"
                          />
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
                Copyrights 2022 © Petpia. Thiết kế website bởi{" "}
                <a target="_blank" href="https://adsmo.vn">
                  ADSMO
                </a>
              </p>
            </div>
          </div>
        </footer>
  );
};

export default Footer;
