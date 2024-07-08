import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Olushola Mark Obikanye</h1>
        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="#" className="home__social-icon" target="_blank">
            <i className="bx bxl-linkden"></i>
          </a>

          <a href="#" className="home__social-icon" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="#" className="home__social-icon" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; SOS Technology Limited. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
