import React, { useState, useRef, useEffect } from "react";
import "../styles/HowItWorks.scss";
import PillarCard from "./PillarCard";

const pillars = [
  {
    tab: "Nutrition",
    icon: "/images/p1.png",
    badgeIcon: "/images/i1.svg",
    stat: "121/80 mmHg",
    title: "Nutrition",
    description:
      "Whole food, plant-predominant diet to prevent, treat, and reverse illness.",
  },
  {
    tab: "Physical activity",
    icon: "/images/p2.png",
    badgeIcon: "/images/i2.svg",
    stat: "32 minutes",
    title: "Physical activity",
    description:
      "Regular activity helps weight management, mental health, and more.",
  },
  {
    tab: "Restorative sleep",
    icon: "/images/p3.png",
    badgeIcon: "/images/i7.svg",
    stat: "8 hours",
    title: "Restorative sleep",
    description: "Consistent, quality sleep supports brain and body health.",
  },
  {
    tab: "Stress management",
    icon: "/images/p4.png",
    badgeIcon: "/images/i4.svg",
    stat: "60 bpm",
    title: "Stress management",
    description:
      "Manage stress to improve overall mental and physical well-being.",
  },
  {
    tab: "Social connection",
    icon: "/images/p5.png",
    badgeIcon: "/images/i5.svg",
    stat: "Feeling better",
    title: "Social connection",
    description: "Meaningful relationships reduce chronic disease risk.",
  },
  {
    tab: "Substance abuse",
    icon: "/images/p6.png",
    badgeIcon: "/images/i6.svg",
    stat: "62 days",
    title: "Substance abuse",
    description: "Avoid harmful substances to improve long-term health.",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(pillars[0].tab);
  const cardRefs = useRef([]);
  const cardContainerRef = useRef(null);
  const scrollInterval = useRef(null);

  // Scroll to active tab on desktop
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    if (!isDesktop) return;

    const index = pillars.findIndex((p) => p.tab === activeTab);
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  // Desktop arrow scroll
  const scroll = (direction) => {
    const container = cardContainerRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Mobile auto-scroll loop
  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      scrollInterval.current = setInterval(() => {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 1, behavior: "smooth" });
        }
      }, 20);
    }

    return () => clearInterval(scrollInterval.current);
  }, []);

  return (
    <section className="how-it-works-section">
      <div className="section-header">
        <p className="section-label">HOW IT WORKS</p>
        <h2>
          <span className="highlight">Lifestyle as medicine:</span> The six pillars
        </h2>
      </div>

      <div className="tabs-and-arrows">
        <div className="pillars-tabs">
          {pillars.map((pill, idx) => (
            <button
              key={idx}
              className={`tab ${activeTab === pill.tab ? "active" : ""}`}
              onClick={() => setActiveTab(pill.tab)}
            >
              {pill.tab}
            </button>
          ))}
        </div>

        <div className="tab-arrows">
          <button className="scroll-arrow small" onClick={() => scroll("left")}>
            &#8592;
          </button>
          <button className="scroll-arrow small" onClick={() => scroll("right")}>
            &#8594;
          </button>
        </div>
      </div>

      <div className="pillar-card-belt" ref={cardContainerRef}>
        {pillars.map((pillar, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`pillar-card-wrapper ${activeTab === pillar.tab ? "active" : ""}`}
          >
            <PillarCard {...pillar} isActive={activeTab === pillar.tab} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
