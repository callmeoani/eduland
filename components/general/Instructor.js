import React from "react";

import Image from "next/image";

import instructor1 from "../../public/assets/images/instructor-1.png";
import instructor2 from "../../public/assets/images/instructor-2.png";
import instructor3 from "../../public/assets/images/instructor-3.png";
import instructorVactor1 from "../../public/assets/images/instructor-vactor-1.svg";
import instructorVactor2 from "../../public/assets/images/instructor-vactor-2.svg";

import {
  IoLogoGoogle,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const Instructor = () => {
  return (
    <section className="instructor">
      <div className="container">
        <Image
          src={instructorVactor1}
          alt="Vector line art"
          className="vector-line"
        />

        <div className="title-wrapper">
          <h2 className="h2 instructor-title">
            Introduce with Our Famous Teacher
          </h2>

          <button className="btn btn-primary">View All Teachers</button>
        </div>

        <ul className="instructor-list">
          <li>
            <div className="instructor-card">
              <figure className="card-banner">
                <Image src={instructor1} alt="Shaapir Prio" />
              </figure>

              <a href="#">
                <h3 className="card-title">Shaapir Prio</h3>
              </a>

              <p className="card-subtitle">Assistant Director</p>

              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoGoogle />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoTwitter />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoInstagram />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="instructor-card">
              <figure className="card-banner">
                <Image src={instructor2} alt="Sellina" />
              </figure>

              <a href="#">
                <h3 className="card-title">Sellina</h3>
              </a>

              <p className="card-subtitle">Director</p>

              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoGoogle />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoTwitter />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoInstagram />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="instructor-card">
              <figure className="card-banner">
                <Image src={instructor3} alt="John Smith" />
              </figure>
              <a href="#">
                <h3 className="card-title">John Smith</h3>
              </a>
              <p className="card-subtitle">Assistant Director</p>
              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoGoogle />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoTwitter />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoInstagram />
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <IoLogoLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <Image
          src={instructorVactor2}
          alt="Vector line art"
          className="vector-line"
        />
      </div>
    </section>
  );
};

export default Instructor;
