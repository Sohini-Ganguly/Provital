import React from "react";
import ImageColumns from "./ImageColumns";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <section className="homepage-hero">
      <ImageColumns />
      <HeroSection />
    </section>
  );
};

export default HomePage;
