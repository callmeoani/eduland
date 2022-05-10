import React from "react";

const Instructor = () => {
  return (
    <section className="instructor">
      <div className="container">
        <img
          src="./assets/images/instructor-vactor-1.svg"
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
                <img
                  src="./assets/images/instructor-1.png"
                  alt="Shaapir Prio"
                />
              </figure>

              <a href="#">
                <h3 className="card-title">Shaapir Prio</h3>
              </a>

              <p className="card-subtitle">Assistant Director</p>

              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="instructor-card">
              <figure className="card-banner">
                <img src="./assets/images/instructor-2.png" alt="Sellina" />
              </figure>

              <a href="#">
                <h3 className="card-title">Sellina</h3>
              </a>

              <p className="card-subtitle">Director</p>

              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="instructor-card">
              <figure className="card-banner">
                <img src="./assets/images/instructor-3.png" alt="John Smith" />
              </figure>
              <a href="#">
                <h3 className="card-title">John Smith</h3>
              </a>
              Name
              <p className="card-subtitle">Assistant Director</p>
              <ul className="card-social-list">
                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="card-social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <img
          src="./assets/images/instructor-vactor-2.svg"
          alt="Vector line art"
          className="vector-line"
        />
      </div>
    </section>
  );
};

export default Instructor;
