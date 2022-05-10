import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <figure className="hero-banner">
          <img
            src="./assets/images/hero-banner.png"
            alt="A young lady sits, holding a pen and a notebook."
          />
        </figure>

        <div className="hero-content">
          <h1 className="h1 hero-title">Start Your Future Education</h1>

          <p className="section-text">
            Credibly redefine distinctive total linkage vis-a-vis multifunction
            data. Phosphorescently impact goal-oriented strategic
          </p>

          <button className="btn btn-primary">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
