import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <figure className="about-banner">
          <img
            src="./assets/images/about-banner.png"
            alt="Eduland students"
            className="about-img"
          />

          <img
            src="./assets/images/about-vector.svg"
            alt="Vector line art"
            className="vector-line"
          />

          <button className="play-btn">
            <ion-icon name="play"></ion-icon>
          </button>
        </figure>

        <div className="about-content">
          <h2 className="h2 about-title">
            We Help to Create Possibility & Success in Your Career!
          </h2>

          <p className="section-text">
            Continually administrate process-centric human capital rather than
            bleeding-edge methodologies. Distinctively supply accurate methods
            of empowerment before.
          </p>

          <button className="btn btn-primary">Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default About;
