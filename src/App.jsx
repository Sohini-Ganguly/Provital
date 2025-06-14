import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import "./styles/HeroWrapper.scss";

function App() {
  return (
    <div>
      <Navbar />

      <div className="hero-wrapper">
        <HeroSection />
      </div>

      <HowItWorks /> {/* ⬅️ Add this line */}
    </div>
  );
}

export default App;
