import React from "react";
import About from "./About";
import Cta from "./Cta";
import Departments from "./Departments";
import Hero from "./Hero";
import Instructor from "./Instructor";

const Main = () => {
  return (
    <main>
      <article>
        <Hero />
        <About />
        <Departments />
        <Instructor />
        <Cta />
      </article>
    </main>
  );
};

export default Main;
