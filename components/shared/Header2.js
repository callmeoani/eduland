import React from "react";
import Link from "next/link";

// import styles from "../styles/Header.module.css";

const Header2 = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="/">
            <a className="logo">
              {/* <img src="./assets/images/logo.svg" alt="Eduland logo" /> */}
            </a>
          </Link>

          <ul className="navbar-list">
            <li>
              <Link href="#">
                <a className="navbar-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="navbar-link">About</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="navbar-link">Service</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="navbar-link">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="navbar-link">Contact</a>
              </Link>
            </li>
          </ul>
          <button className="get-started-header">Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
