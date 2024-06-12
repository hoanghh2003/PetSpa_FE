// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { MoveRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";



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
                <p>Pampering Paws, One Spa Day at a Time</p>
                <div className="footer_hotline iconbox_item iconbox_lefticon">
                  <div className="item_icon">
                    <FontAwesomeIcon icon={faPhoneFlip} shake />{" "}
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      <a href="tel:(913)756-3126">0123.456.789</a>
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
                      <span>Mon - Sat:</span>
                      <span>8am – 8pm</span>
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
                        <FontAwesomeIcon icon={faCircle} size="xs" /> {" "}
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about">
                        <FontAwesomeIcon icon={faCircle} size="xs" /> {" "}
                        About
                      </a>
                    </li>
                    <li>
                      <a href="service">
                        <FontAwesomeIcon icon={faCircle} size="xs" />{" "}
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="shop">
                        <FontAwesomeIcon icon={faCircle} size="xs" /> {" "}
                        Shop
                      </a>
                    </li>
                  </ul>
                  <ul className="unorder_list_block">
                    <li>
                      <a href="faq">
                        <FontAwesomeIcon icon={faCircle} size="xs" /> {" "} 
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="gallery">
                        <FontAwesomeIcon icon={faCircle} size="xs" /> {" "}
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a href="shipping_info">
                        <FontAwesomeIcon icon={faCircle} size="xs" />{" "}
                        Delivery
                      </a>
                    </li>
                    <li>
                      <a href="deals">
                        <FontAwesomeIcon icon={faCircle} size="xs" /> {" "}
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
                      <FontAwesomeIcon icon={faArrowRight} />{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
