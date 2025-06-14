import React from "react";
import "../styles/HeroSection.scss";
import ImageColumns from "./ImageColumns";
import SearchSection from "./SearchSection";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="blur-blob" />

        <div className="image-columns-wrapper">
          <ImageColumns />
        </div>

        <div className="text-block">
          <h1>
            Book an appointment <br />
            with <span className="highlight">lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>

          <div className="search-wrapper">
            <SearchSection />
          </div>
        </div>
      </section>

      {/* Actual colorful separator */}
      <div className="angled-separator" />
    </>
  );
};

export default HeroSection;
