import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Tooltip } from "react-tippy";

const AboutOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`about-overlay ${activeStatus ? "active" : ""}`}>
      <div
        className="about-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="about-overlay__content">
        <button
          className="about-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="about-overlay__content-container d-flex flex-column justify-content-between h-100">
          <div className="about-overlay__widget-wrapper">
            <div className="about-widget">
              <h2 className="about-widget__title">Menu</h2>
              <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
                <ul style={{ display: 'flex', flexDirection: 'column' }}>
                  <li>
                    <Link href="/" as={process.env.PUBLIC_URL + "/"} style={{ height: '5vh' }}>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/other/about"
                      as={process.env.PUBLIC_URL + "/other/about"}
                    >
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"} style={{ height: '5vh' }}
                    >
                      <a>Shop</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/order-tracking"
                      as={process.env.PUBLIC_URL + "/other/order-tracking"} style={{ height: '5vh' }}
                    >
                      <a>Custom Orders</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/other/contact"
                      as={process.env.PUBLIC_URL + "/other/contact"} style={{ height: '5vh' }}
                    >
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="about-overlay__contact-widget">
            <p className="email">
              <a href="mailto:contact@lezada.com">contact@lezada.com</a>
            </p>
            <p className="phone">(+00) 123 567990</p>
            <div className="social-icons">
              <ul>
                <li>
                  <Tooltip
                    title="Twitter"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.twitter.com" target="_blank">
                      <FaTwitter />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Facebook"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.facebook.com" target="_blank">
                      <FaFacebookF />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Instagram"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.instagram.com" target="_blank">
                      <FaInstagram />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Youtube"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.youtube.com" target="_blank">
                      <FaYoutube />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
