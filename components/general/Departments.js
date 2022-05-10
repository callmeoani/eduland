import React from "react";

const Departments = () => {
  return (
    <section className="departments">
      <div className="container">
        <img
          src="./assets/images/departmets-vector.svg"
          alt="Vector line art"
          className="vector-line"
        />

        <h2 className="h2 departments-title">
          We Have Most of Popular Departments
        </h2>

        <ul className="departments-list">
          <li>
            <div className="departments-card">
              <a href="#" className="card-banner">
                <figure>
                  <img
                    src="./assets/images/depertment-1.png"
                    alt="Artificial Intelligence"
                  />
                </figure>
              </a>

              <a href="#">
                <h3 className="h3 card-title">Artificial Intelligence</h3>
              </a>

              <p className="card-text">
                Assertively parallel task synergistic deliverables after
                high-quality.
              </p>

              <a href="#" className="card-link">
                <span>Learn More</span>

                <ion-icon name="arrow-forward"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="departments-card">
              <a href="#" className="card-banner">
                <figure>
                  <img
                    src="./assets/images/depertment-2.png"
                    alt="Civil Engineering"
                  />
                </figure>
              </a>

              <a href="#">
                <h3 className="h3 card-title">Civil Engineering</h3>
              </a>

              <p className="card-text">
                Assertively parallel task synergistic deliverables after
                high-quality.
              </p>

              <a href="#" className="card-link">
                <span>Learn More</span>

                <ion-icon name="arrow-forward"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="departments-card">
              <a href="#" className="card-banner">
                <figure>
                  <img
                    src="./assets/images/depertment-3.png"
                    alt="Business Studies"
                  />
                </figure>
              </a>

              <a href="#">
                <h3 className="h3 card-title">Business Studies</h3>
              </a>

              <p className="card-text">
                Assertively parallel task synergistic deliverables after
                high-quality.
              </p>

              <a href="#" className="card-link">
                <span>Learn More</span>

                <ion-icon name="arrow-forward"></ion-icon>
              </a>
            </div>
          </li>
        </ul>

        <button className="btn btn-primary">View All Department</button>
      </div>
    </section>
  );
};

export default Departments;
