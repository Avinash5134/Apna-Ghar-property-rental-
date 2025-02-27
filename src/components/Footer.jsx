import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <div className="footer__data">
            <h3 className="footer__title">APNA GHAR</h3>
            <p className="footer__description">
              Explore Your Destinations <br />
              You choose the destination,
              <br /> we provide the experience.
            </p>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          <div className="footer__data">
            <h3 className="footer__subtitle">About</h3>
            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Features
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  News & Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <h3 className="footer__subtitle">Company</h3>
            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Team
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Plan & Pricing
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Become a member
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <h3 className="footer__subtitle">Support</h3>
            <ul>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  FAQs
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Support Center
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__rights">
          <p className="footer__copy">
            Experience comfort and convenience with Apna Ghar!
          </p>
          <div className="footer__terms">
            <a href="#" className="footer__terms-link">
              Terms & Agreements
            </a>
            <a href="#" className="footer__terms-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
