import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/assets/images/logo.svg";

const Header = ({ setShowSignUp }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //clean up the function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isScrolled && "active"}`} data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>

        {/* <a href="#" className="logo">
          <img src="./assets/images/logo.svg" alt="Eduland logo" />
        </a> */}

        <button className="menu-open-btn" data-menu-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav className="navbar" data-navbar>
          <button className="menu-close-btn" data-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <Link href="/">
            <a>
              <Image src={logo} alt="Eduland logo" />
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

          <button
            onClick={() => setShowSignUp(true)}
            className="btn btn-secondary"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
