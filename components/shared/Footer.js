import React from "react";

import Image from "next/image";

import logo from "../../public/assets/images/logo.svg";

import {
  IoLogoGoogle,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Image src={logo} alt="Eduland logo" />
            </a>

            <p className="footer-text">
              Professionally scale cross functional human capital and extensive
              technology.
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IoLogoGoogle />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoInstagram />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-link-title">Services</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Design
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Development
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Marketing
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Content Writing
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-link-title">Company</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Terms
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-link-title">Job Info</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Select
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Payment
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-link-title">Contact</p>
              </li>

              <li className="contact-item">
                <span>Call : </span>

                <a href="tel:5463876387" className="contact-link">
                  +2349039937186
                </a>
              </li>

              <li className="contact-item">
                <span>Email : </span>

                <a href="mailto:example@gmail.com" className="contact-link">
                  callmeoani@gmail.com
                </a>
              </li>

              <li className="contact-item">
                <span>Address : </span>

                <a href="#" className="contact-link">
                  <address>San Francisco, USA</address>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="">codewithOani</a>. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
